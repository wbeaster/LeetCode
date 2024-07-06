from typing import List


def longestCommonPrefix(strs: List[str]) -> str:
    sorted_strs = sorted(strs, key=len)

    longestPrefix = ""
    in_all_strings = True

    for p in range(0, len(sorted_strs[0])):
        maybeLongestPrefix = sorted_strs[0][:p + 1]

        for string_to_check in sorted_strs:
            # To be common is must exist at the beginning of each string
            prefix_being_checked = string_to_check[:len(maybeLongestPrefix)]
            if prefix_being_checked != maybeLongestPrefix:
                return longestPrefix

        longestPrefix = maybeLongestPrefix

    return longestPrefix




strs=["dog","racecar","car"]
print(longestCommonPrefix(strs=strs))