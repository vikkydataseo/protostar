
%lang starknet

@external
func test_1{syscall_ptr : felt*, range_check_ptr}():
    assert 1=1
    return ()
end
