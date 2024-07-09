from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for a in range(len(nums)):
            for b in range(len(nums)):
                if a == b:
                    break
                if nums[a] + nums[b] == target:
                    return [a, b]