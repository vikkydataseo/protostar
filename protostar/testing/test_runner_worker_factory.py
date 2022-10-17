import asyncio
from pathlib import Path
from typing import Protocol

from protostar.self import ProtostarDirectory

from .test_runner import TestRunner
from .test_shared_tests_state import SharedTestsState
from .test_suite import TestSuite
from .testing_seed import Seed


class TestSuiteRunnerWorkerProtocol(Protocol):
    def __call__(self, test_suite: TestSuite) -> None:
        ...


class TestSuiteRunnerWorkerFactory:
    def __init__(
        self, project_root_path: Path, protostar_directory: ProtostarDirectory
    ) -> None:
        self._project_root_path = project_root_path
        self._protostar_directory = protostar_directory

    def create(
        self,
        shared_tests_state: SharedTestsState,
        include_paths: list[str],
        profiling: bool,
        disable_hint_validation_in_user_contracts: bool,
        testing_seed: Seed,
    ) -> TestSuiteRunnerWorkerProtocol:
        def worker(test_suite: TestSuite):
            test_suite_runner = TestRunner(
                project_root_path=self._project_root_path,
                shared_tests_state=shared_tests_state,
                include_paths=include_paths,
                profiling=profiling,
                disable_hint_validation_in_user_contracts=disable_hint_validation_in_user_contracts,
            )
            asyncio.run(
                test_suite_runner.run_test_suite(
                    test_suite=test_suite, testing_seed=testing_seed
                )
            )

        return worker

    def _prepare_include_paths(
        self,
    ):
        return [
            str(path)
            for path in [
                self._protostar_directory.protostar_test_only_cairo_packages_path,
                *self._project_cairo_path_builder.build_project_cairo_path_list(
                    cairo_path or []
                ),
            ]
        ]
