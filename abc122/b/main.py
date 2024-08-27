S = input()
strings = ['A', 'C', 'G', 'T']
count = 0
ans = []
flag = True
while flag:
    for i in S:
        if i in strings:
            count += 1
        else:
            ans.append(count)
            count = 0
    flag = False
print(max(ans))