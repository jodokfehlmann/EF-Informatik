def f1(list_in):
    list_in.append(9)
    return id(list_in)

nums = [1, 2, 3]

if id(nums) == f1(nums):
    print('Jabba')
else:
    print('Bazinga')
print(nums)