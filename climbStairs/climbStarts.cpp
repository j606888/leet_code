#include <vector>
#include <iostream>
#include <queue>
#include <map>

using namespace std;

class Solution {
  public:
    int maxSubArray(vector<int> &nums){
      int max = 0;
      int currentMax = nums[0];
      
      for(int i=1;i<nums.size();i++){
        if (currentMax < 0) currentMax = nums[i];
        else currentMax += nums[i];

        if(currentMax > max) max = currentMax;
      }

      return max;
    }
};

int main() {
  std::vector<int> nums{-2, 1, -3, 4, -1, 2, 1, -5, 4};

  int ans;
  Solution sol;
  ans = sol.maxSubArray(nums);
  cout << ans << endl;
  
  return 0;
}