def timeConversion(s):
    meridiem_indicator = s[-2]
    hours = s[0:2]
    minutes = s[3:5]
    seconds = s[6:8]

    if meridiem_indicator == 'A' and int(hours) == 12:
        hours = '00'
    elif meridiem_indicator == 'P' and int(hours) == 12:
        hours = '12'
    elif meridiem_indicator == 'P':
        hours = int(hours) + 12

    return f'{hours}:{minutes}:{seconds}'

    # Write your code here


if __name__ == '__main__':
    # 06:40:03AM
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    print(result)

    # fptr.write(result + '\n')

    # fptr.close()