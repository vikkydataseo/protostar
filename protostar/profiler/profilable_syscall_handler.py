from typing import Any

from starkware.cairo.lang.vm.memory_segments import MemorySegmentManager
from starkware.cairo.lang.vm.relocatable import RelocatableValue
from starkware.starknet.business_logic.state.state_api import SyncState
from starkware.starknet.core.os.syscall_utils import SysCallInfo
from protostar.starknet.cheatable_syscall_handler import CheatableSysCallHandler



class ProfilableSysCallHandler(CheatableSysCallHandler):
    def __init__(self, state: SyncState, **kwargs: Any):
        self.address_to_syscall_info: dict[RelocatableValue, tuple[str, SysCallInfo]] = {}
        super().__init__(state=state, **kwargs)

    def storage_write(self, segments: MemorySegmentManager, syscall_ptr: RelocatableValue):
        self.address_to_syscall_info[syscall_ptr] = ("storage_write", self.syscall_info["storage_write"])
        super().storage_write(segments, syscall_ptr)

