from pathlib import Path

import pytest

from src.commands.test.runner import TestRunner

current_directory = Path(__file__).parent


@pytest.mark.asyncio
async def test_cheatcodes():
    runner = TestRunner()
    # await runner.run_tests_in(current_directory / "examples" / "cheats")
    await runner.run_tests_in(current_directory / "examples" / "dump")
    assert runner.reporter
    assert not runner.reporter.failed_cases
    assert runner.reporter._collected_count == 100
