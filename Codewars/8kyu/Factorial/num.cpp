#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;

double zeroes(int base, int number) {
  return number / 5;
}

unsigned long fact(auto num) {
  if(num < 1) {
    return 1;
  }
  return num * fact(num - 1);
}

int main() {
  // std::cout << zeroes(10, 50) << std::endl;
  auto n = 4;
  cout << fact(50) << endl;
}