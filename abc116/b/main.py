s = int(input())
flag = True
count = 0
now_num = 0
a = {}
while flag:
    if count == 0:
        now_num = s
        a[now_num] += 1
        count += 1

    elif now_num%2 == 0 and count <= 1:
        now_num = now_num/2
        a[now_num] += 1
        if a[now_num] >= 2:
            print("hoge")
            print(a)
            flag = False

    elif now_num%2 != 0 and count <= 1:
        print("666")
        now_num = 3*now_num+1
        a[now_num] += 1
        if a[now_num] >= 2:
            print("lol")
            print(a)
            flag = False