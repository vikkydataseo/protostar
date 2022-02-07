from collections import OrderedDict
from pathlib import Path
import shutil

import tomli_w


def new(project_name: str, script_root: str):
    """
    Creates new protostar project
    """
    project_path = Path() / project_name
    copy_template(script_root, "default", project_path)

    package = PackageConfig(project_path=project_path)
    package.name = project_name
    package.write()


def copy_template(script_root, template_name: str, project_path: Path):
    template_path = f"{script_root}/templates/{template_name}"
    shutil.copytree(template_path, project_path)


class PackageConfig:
    # pylint: disable=too-many-instance-attributes
    general_props = ["name", "description", "license", "version", "authors"]

    def __init__(self, project_path=None):
        self._project_path = project_path
        self.name = "package_name"
        self.description = "example description"
        self.license = ""
        self.version = "0.1.0"
        self.authors = []
        self.dependencies = []
        self.dev_dependencies = []

    @property
    def project_path(self) -> Path:
        return self._project_path if self._project_path else Path()

    @property
    def config_path(self) -> Path:
        return self.project_path / "package.toml"

    @property
    def config_dict(self):
        obj_dict = self.__dict__
        result = OrderedDict()
        result["protostar.general"] = {key: obj_dict[key] for key in self.general_props}
        result["protostar.dependencies"] = {}
        result["protostar.dev-dependencies"] = {}
        return result

    def write(self):
        with open(self.config_path, "wb") as file:
            tomli_w.dump(self.config_dict, file)