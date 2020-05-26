#Your task is to write an algorithm to optimize the sets of forward/return shipping route pairs that allow the aircraft to be optimally utilized, given a list a of forward routes and a list of return shipping routes.
# 
# Input:
# maxTravelDist = 7000
# forwardRouteList = [[1,2000],[2,4000],[3,6000]]
# returnRouteList = [[1,2000]]
#
# Output:
# [[2,1]] 

import operator as op

def opt_route(F, B, D):
  # F: forward route list, type: list[list[int]]
  # B: backward rout list, type: list[list[int]]
  # D: max travel distance, type: int
  
  if not F or not B:
    return []

  def closest_index(L, target):
    lo, hi = 0, len(L) - 1
    while lo < hi:
      mid = (lo + hi) // 2
      if target < L[mid][1]:
        hi = mid - 1
      elif target > L[mid][1]:
        lo = mid + 1
      else:
        return mid
    if F[hi][1] <= target:
      return hi
    return hi - 1
  
  F.sort(key = op.itemgetter(1))
  d = 0  # max distance so far
  ids = [0, 0]
  for (bid, broute) in B:
    i = closest_index(F, D - broute)
    if d < broute + F[i][1] <= D:
      d = broute + F[i][1]
      ids = [F[i][0], bid]
  return ids