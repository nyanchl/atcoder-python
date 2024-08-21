N = int(input())
d = list(map(int, input().split()))
d.sort()
count = 0
half_line = d[N//2]
if len(d[:d.index(half_line)]) == len(d[d.index(half_line):]):
    count += 1
    if d[d.index(half_line)] - d[d.index(half_line)-1] != 0 or 1:
        count += d[d.index(half_line)] - d[d.index(half_line)-1] -1
print(count)