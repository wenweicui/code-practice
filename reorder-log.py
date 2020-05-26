# You have an array of logs.  Each log is a space delimited string of words.
# 
# Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
# 
# Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]



def reorderLogFiles(self, logs):
    def f(log):
        id_, rest = log.split(" ", 1)
        return (0, rest, id_) if rest[0].isalpha() else (1,)

    return sorted(logs, key = f)