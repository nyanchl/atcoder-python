S = input()
strings = list("ACGT")
N = len(S)
ans = 0
for i in range(N):
    for j in range(i,N):
        print(j)
        if not S[j] in strings:
            ans = max(ans, j-i)
            print("hoge",ans)
            break
    else:
        ans = max(ans, N-i)
        print("huga",ans)
print(ans)
