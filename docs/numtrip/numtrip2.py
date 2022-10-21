board = [
    [2, 4, 1, 8, 8],
    [4, 2, 8, 2, 1],
    [4, 4, 8, 4, 2],
    [2, 8, 1, 4, 1],
    [2, 4, 4, 4, 4]
]


zahlen_matrix = []
zahlen_matrix.append([64,4,16,32,8])
zahlen_matrix.append([32,16,64,8,32])
zahlen_matrix.append([8,16,64,8,32])
zahlen_matrix.append([2,4,16,32,8])
zahlen_matrix.append([8,16,64,8,32])


print(board)

for zeile in board:
    for zelle in zeile:
        print(' -', end='')
    print(' ')
    for zelle in zeile:
        print(f'|{zelle}', end='')
    print('|')

for zelle in board[0]:
    print(' -', end='')
print(' ')