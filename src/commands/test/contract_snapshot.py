import copy
from starkware.starknet.testing.starknet import Starknet

from typing import List, Optional

from starkware.starknet.compiler.compile import compile_starknet_files
from starkware.starknet.services.api.contract_definition import ContractDefinition
from starkware.starknet.testing.contract import StarknetContract
from starkware.starknet.testing.contract_utils import get_abi
from starkware.starknet.testing.objects import StarknetTransactionExecutionInfo
from starkware.starknet.definitions.general_config import StarknetGeneralConfig
from starkware.starknet.testing.state import CastableToAddressSalt, StarknetState

class ForkableContract(StarknetContract):
    def fork(self):
        """
        Creates a snapshot of deployed contract with a related state.
        """
        return ForkableContract(
            state=self.state.copy(),
            abi=copy.deepcopy(self.abi),
            contract_address=self.contract_address,
            deploy_execution_info=copy.deepcopy(self.deploy_execution_info),
        )


class ForkableStarknet(Starknet):
    @classmethod
    async def empty(cls, general_config: Optional[StarknetGeneralConfig] = None) -> "Starknet":
        return ForkableStarknet(state=await StarknetState.empty(general_config=general_config))

    async def deploy(
        self,
        source: Optional[str] = None,
        contract_def: Optional[ContractDefinition] = None,
        contract_address_salt: Optional[CastableToAddressSalt] = None,
        cairo_path: Optional[List[str]] = None,
        constructor_calldata: Optional[List[int]] = None,
    ) -> StarknetContract:
        assert (source is None) != (
            contract_def is None
        ), "Exactly one of source, contract_def should be supplied."
        if contract_def is None:
            contract_def = compile_starknet_files(
                files=[source], debug_info=True, cairo_path=cairo_path
            )
            source = None
            cairo_path = None
        assert (
            cairo_path is None
        ), "The cairo_path argument can only be used with the source argument."
        assert contract_def is not None
        address, execution_info = await self.state.deploy(
            contract_definition=contract_def,
            contract_address_salt=contract_address_salt,
            constructor_calldata=[] if constructor_calldata is None else constructor_calldata,
        )

        deploy_execution_info = StarknetTransactionExecutionInfo.from_internal(
            tx_execution_info=execution_info, result=(), main_call_events=[]
        )
        return ForkableContract(
            state=self.state,
            abi=get_abi(contract_definition=contract_def),
            contract_address=address,
            deploy_execution_info=deploy_execution_info,
        )

    def fork(self):
        return ForkableStarknet(state=self.state.copy())
     




