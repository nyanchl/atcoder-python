N = int(input())
A = list(map(int, input().split()))
ans_list = []
count = 1
flag = True
while flag:
    ans_list.append(A.index(count)+1)
    count += 1
    if len(ans_list) == N:
        flag = False
print(*ans_list)