from idlelib.tree import TreeNode
from typing import Optional, List


def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
    def b_tree_to_list(node: Optional[TreeNode], node_value_list: List) -> None:
        node_value_list.append(node.val)
        if node.left == None and node.right == None:
            return
        if node.left == None:
            node_value_list.append('null')
        if node.left != None:
            b_tree_to_list(node.left, node_value_list)
        if node.right == None:
            node_value_list.append('null')
        if node.right != None:
            b_tree_to_list(node.right, node_value_list)

    p_node_list = []
    b_tree_to_list(node=p, node_value_list=p_node_list)

    q_node_list = []
    b_tree_to_list(node=q, node_value_list=q_node_list)

    print(p_node_list)
    print(q_node_list)

    return p_node_list == q_node_list

