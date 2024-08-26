N = int(input())
v = list(map(int, input().split()))
v.sort()
count = 0
ans = 0
for index,i in enumerate(v):
    if count == 0:
        ans = (i+v[index+1])/2
        count += 1
    elif count == N-1 and index == N-1:
        break
    else:
        ans = (ans + v[index+1])/2
        count += 1
print(ans)