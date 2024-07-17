    def mergeTwoLists(self, list1, list2):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        if list1 is None and list2 is None:
            return None
        if list1 is not None and list2 is None:
            return list1
        if list2 is not None and list1 is None:
            return list2

        new_list_head = list1 if list1.val <= list2.val else list2
        new_list = new_list_head
        if list1.val <= list2.val:
            list1 = list1.next
        else:
            list2 = list2.next

        if list1 is None:
            new_list.next = list2
            return new_list_head
        if list2 is None:
            new_list.next = list1
            return new_list_head

        while True:
            if list1.val < list2.val:
                new_list.next = list1
                list1 = list1.next
            else:
                new_list.next = list2
                list2 = list2.next
            new_list = new_list.next

            if list1 is None:
                new_list.next = list2
                break
            if list2 is None:
                new_list.next = list1
                break

        return new_list_head
