// https://leetcode.com/problems/count-sorted-vowel-strings/
#include <iostream>
using namespace std;
class Solution {
  public:
    int countVowelStrings(int n, int current_num=5) {
      if(n == 1) return current_num;

      int count = 0;
      for (int i = 5; i >= 1; i--) {
        count += countVowelStrings(n-1, i);
      }

      return count;
    }
};

int main() {
  Solution sol;
  cout << sol.countVowelStrings(33) << endl; 
  return 0;
}

