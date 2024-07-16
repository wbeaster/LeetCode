def isValid(self, s: str) -> bool:
    if len(s) == 1:
        return False

    # ([{}])
    # {[(}])

    openers_to_closers = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    closers_to_openers = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    openers = []

    for c in s:
        if c in openers_to_closers:
            openers.append(c)
        else:
            if openers[-1] != closers_to_openers[c]:
                return False
            openers.pop()

    if len(s) == 1:
        return False

    # ([{}])
    # {[(}])

    openers_to_closers = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    closers_to_openers = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    openers = []

    for c in s:
        if c in openers_to_closers:
            openers.append(c)
        else:
            if len(openers) == 0 or openers[-1] != closers_to_openers[c]:
                return False
            openers.pop()

    return len(openers) == 0

