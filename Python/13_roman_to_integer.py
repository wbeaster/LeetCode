def romanToInt(self, s: str) -> int:
    roman_to_integer = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    subtractions = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    }

    # if it's I, X, C we need to look at the next char (if it exists)
    # if the next char subtractive, then that's the number, add to previous value, move right by two char
    # else it's additive, add to previous value

    integer = 0
    i = 0

    if len(s) == 1:
        return roman_to_integer[s]

    # TODO: Will this work for all cases if len(s) == 2?
    # MCMXCIV
    while i < len(s):
        current = s[i]

        if current in ('I', 'X', 'C') and i < len(s) - 1:
            next_char = s[i+1]

            if (current + next_char) in subtractions:
                integer += subtractions[current + next_char]
                i += 2
            else:
                integer += roman_to_integer[current]
                # 1000 + 900
                i += 1
        else:
            integer += roman_to_integer[current]
            # 1000 + 900
            i += 1

