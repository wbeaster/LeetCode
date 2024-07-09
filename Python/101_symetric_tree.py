# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from idlelib.tree import TreeNode
from typing import Optional


class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        # Navigate one in-order
        # Navigate one post-order
        def traverse_in_order_l_to_r(node, node_list):
            if node.left is not None:
                traverse_in_order_l_to_r(node.left)
            else:
                node_list.append('null')

            node_list.append(node.value)

            if node.right is not None:
                traverse_in_order_l_to_r(node.right)
            else:
                node_list.append('null')

        def traverse_in_order_r_to_l(node, node_list):
            if node.right is not None:
                traverse_in_order_r_to_l(node.right)
            else:
                node_list.append('null')

            node_list.append(node.value)

            if node.left is not None:
                traverse_in_order_r_to_l(node.left)
            else:
                node_list.append('null')

        left_node_list = []
        if root.left.value is not None:
            traverse_in_order_l_to_r(root.left, left_node_list)

        right_node_list = []
        if root.right.value is not None:
            traverse_in_order_l_to_r(root.right, right_node_list)

        return left_node_list == right_node_list.reverse