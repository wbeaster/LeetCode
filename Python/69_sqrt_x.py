def mySqrt(self, x: int) -> int:
    greatest = 0
    test_greatest = 0

    while (test_greatest * test_greatest <= x):
        greatest = test_greatest
        test_greatest += 1

    return greatest