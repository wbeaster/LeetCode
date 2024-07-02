# Definition for singly-linked list.
from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Start at the begining
        # Look at the current node's `val`
        # Look at the next node's val
        # If the current val is the same the next val then current.next = next.next
        # If the current val is NOT the same as the next val then current = next
        # Loop until next = None
        # Return the head
        if head is None:
            return None
        current: ListNode = head

        while current.next is not None:
            next: ListNode = current.next
            if current.val == next.val:
                current.next = next.next
            else:
                current = next

        return head
