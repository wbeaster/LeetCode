def isPalindrome(self, x: int) -> bool:
    a = str(x)
    b = str(x)[::-1]

    return a == b