#include "iostream"
using namespace std;
int main(){
  int a[100000];
  int n;
  cin>>n;
  long long sum1000[100];
  long long tmp1000=0;
  for(int i=0;i<n;i++){
    cin>>a[i];
    tmp1000+=a[i];
    if((i+1)%1000==0){
      sum1000[i/1000]=tmp1000;
      tmp1000=0;
    }
  }
  int m;
  cin>>m;
  for(int i=0;i<m;i++){
    int l,r;
    cin>>l>>r;
    l--;r--;
    long long res=0;
    int j=l;
    while(j<=r){
      if(j%1000==0&&j+999<=r){
        res+=sum1000[j%1000];
        j+=1000;
      }
      else{
        res+=a[j];
        j++;
      }
    }
    cout<<res<<endl;
  }
}