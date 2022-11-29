from pathlib import Path

import pytest

from protostar.protostar_exception import ProtostarException
from tests.integration.conftest import CreateProtostarProjectFixture
from tests.integration.protostar_fixture import ProtostarFixture

from protostar.starknet_gateway.gateway_facade import InputValidationException


@pytest.fixture(name="protostar")
def protostar_fixture(create_protostar_project: CreateProtostarProjectFixture):
    with create_protostar_project() as protostar:
        protostar.create_files(
            {"src/main.cairo": Path(__file__).parent / "getter_contract.cairo"}
        )
        protostar.build_sync()
        yield protostar


async def test_call(
    protostar: ProtostarFixture,
    devnet_gateway_url: str,
):
    declare_response = await protostar.declare(
        contract=protostar.project_root_path / "build" / "main.json",
        gateway_url=devnet_gateway_url,
    )
    deploy_response = await protostar.deploy(
        class_hash=declare_response.class_hash,
        gateway_url=devnet_gateway_url,
    )

    response = await protostar.call(
        contract_address=deploy_response.address,
        function_name="add_3",
        inputs=[3],
        gateway_url=devnet_gateway_url,
    )

    assert response.response.res == 6


async def deploy_main_contract(protostar: ProtostarFixture, devnet_gateway_url: str):
    declare_response = await protostar.declare(
        contract=protostar.project_root_path / "build" / "main.json",
        gateway_url=devnet_gateway_url,
    )
    return await protostar.deploy(
        class_hash=declare_response.class_hash,
        gateway_url=devnet_gateway_url,
    )


async def test_call_inputs(
    protostar: ProtostarFixture,
    devnet_gateway_url: str,
):
    deploy_response = await deploy_main_contract(protostar, devnet_gateway_url)

    response = await protostar.call(
        contract_address=deploy_response.address,
        function_name="add_multiple_values",
        inputs=[3, 2, 5],
        gateway_url=devnet_gateway_url,
    )

    assert response.response.res == 10  # type: ignore


async def test_call_inputs_args_dict(
    protostar: ProtostarFixture,
    devnet_gateway_url: str,
):
    deploy_response = await deploy_main_contract(protostar, devnet_gateway_url)

    response = await protostar.call(
        contract_address=deploy_response.address,
        function_name="add_multiple_values",
        inputs={"a": 5, "c": 3, "b": 2},
        gateway_url=devnet_gateway_url,
    )

    assert response.response.res == 10  # type: ignore


async def test_call_inputs_args_dict_fail(
    protostar: ProtostarFixture,
    devnet_gateway_url: str,
):
    deploy_response = await deploy_main_contract(protostar, devnet_gateway_url)

    with pytest.raises(InputValidationException):
        await protostar.call(
            contract_address=deploy_response.address,
            function_name="add_multiple_values",
            inputs={"a": 5, "c": 3, "ba": 2},
            gateway_url=devnet_gateway_url,
        )


async def test_call_failure(
    protostar: ProtostarFixture,
    devnet_gateway_url: str,
):
    declare_response = await protostar.declare(
        contract=protostar.project_root_path / "build" / "main.json",
        gateway_url=devnet_gateway_url,
    )
    deploy_response = await protostar.deploy(
        class_hash=declare_response.class_hash,
        gateway_url=devnet_gateway_url,
    )

    with pytest.raises(ProtostarException, match="0 != 1"):
        await protostar.call(
            contract_address=deploy_response.address,
            function_name="error_call",
            inputs=[],
            gateway_url=devnet_gateway_url,
        )