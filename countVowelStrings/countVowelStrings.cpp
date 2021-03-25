#include <iostream>
#include <vector>
using namespace std;
int main() {
  
vector<vector<int>> vec { { 1, 2, 3 }, 
                         { 4, 5, 6 }, 
                         { 7, 8, 9, 4 } }; 
  
}
// https://leetcode.com/problems/count-sorted-vowel-strings/
#include <iostream>
#include <vector>
using namespace std;
class Solution {
  public:
    int countVowelStrings(int n)
    {
      vector<vector<int> > dp(n + 1, vector<int>(6));
      for (int i = 1; i <= n; ++i)
        for (int k = 1; k <= 5; ++k)
          dp[i][k] = dp[i][k - 1] + (i > 1 ? dp[i - 1][k] : 1);
      return dp[n][5];
    }
};