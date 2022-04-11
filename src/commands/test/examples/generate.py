code = """
%lang starknet

@external
func test_1{syscall_ptr : felt*, range_check_ptr}():
    assert 1=1
    return ()
end
"""

for i in range(20):
    with open(f"dump/test_file_{i}.cairo", "w") as f:
        f.write(code)
