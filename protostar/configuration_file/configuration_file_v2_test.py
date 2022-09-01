from pathlib import Path

import pytest

from protostar.configuration_file.configuration_toml_writer import (
    ConfigurationTOMLWriter,
)
from protostar.utils.protostar_directory import VersionManager

from .configuration_file import ConfigurationFile, ContractNameNotFoundException
from .configuration_file_v2 import ConfigurationFileV2, ConfigurationFileV2Model
from .configuration_toml_reader import ConfigurationTOMLReader


@pytest.fixture(name="protostar_toml_content")
def protostar_toml_content_fixture() -> str:
    return """\
    [project]
    min-protostar-version="9.9.9"
    lib-path="./lib"
    no-color=true
    network="devnet1"
    cairo-path=["bar"]

    [profile.release.project]
    network="mainnet2"

    [declare]
    network="devnet2"

    [profile.release.declare]
    network="mainnet"

    [contracts]
    foo = [
    "./src/foo.cairo",
    ]
    bar = [
    "./src/bar.cairo",
    ]
    """


@pytest.fixture(name="project_root_path")
def project_root_path_fixture(tmp_path: Path):
    return tmp_path


@pytest.fixture(name="configuration_file")
def configuration_file_fixture(project_root_path: Path, protostar_toml_content: str):
    protostar_toml_path = project_root_path / "protostar.toml"
    protostar_toml_path.write_text(protostar_toml_content)
    return ConfigurationFileV2(
        project_root_path=project_root_path,
        configuration_toml_reader=ConfigurationTOMLReader(path=protostar_toml_path),
        configuration_toml_writer=ConfigurationTOMLWriter(
            output_file_path=project_root_path / "new_protostar.toml"
        ),
    )


def test_retrieving_min_protostar_version(configuration_file: ConfigurationFile):
    min_protostar_version = configuration_file.get_min_protostar_version()

    assert min_protostar_version == VersionManager.parse("9.9.9")


def test_retrieving_contract_names(configuration_file: ConfigurationFile):
    contract_names = configuration_file.get_contract_names()

    assert contract_names == ["foo", "bar"]


def test_retrieving_contract_source_paths(
    configuration_file: ConfigurationFileV2, project_root_path: Path
):
    paths = configuration_file.get_contract_source_paths(contract_name="foo")

    assert paths == [
        (project_root_path / "./src/foo.cairo").resolve(),
    ]


def test_error_when_retrieving_paths_from_not_defined_contract(
    configuration_file: ConfigurationFile,
):
    with pytest.raises(ContractNameNotFoundException):
        configuration_file.get_contract_source_paths(
            contract_name="NOT_DEFINED_CONTRACT"
        )


def test_reading_command_argument_attribute(configuration_file: ConfigurationFile):
    arg_value = configuration_file.get_command_argument(
        command_name="declare", argument_name="network"
    )

    assert arg_value == "devnet2"


def test_reading_argument_attribute_defined_within_specified_profile(
    configuration_file: ConfigurationFile,
):
    arg_value = configuration_file.get_command_argument(
        command_name="declare", argument_name="network", profile_name="release"
    )

    assert arg_value == "mainnet"


def test_saving_configuration(
    configuration_file: ConfigurationFileV2, protostar_toml_content: str
):
    configuration_file_v2_model = ConfigurationFileV2Model(
        min_protostar_version="9.9.9",
        project_config={
            "lib-path": "./lib",
            "no-color": True,
            "network": "devnet1",
            "cairo-path": ["bar"],
        },
        command_name_to_config={"declare": {"network": "devnet2"}},
        contract_name_to_path_strs={
            "foo": [
                "./src/foo.cairo",
            ],
            "bar": [
                "./src/bar.cairo",
            ],
        },
        profile_name_to_commands_config={
            "release": {"declare": {"network": "mainnet"}}
        },
        profile_name_to_project_config={"release": {"network": "mainnet2"}},
    )

    file_path = configuration_file.save(configuration_file_v2_model)
    result = file_path.read_text()

    assert result == protostar_toml_content