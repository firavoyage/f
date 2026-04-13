#include <iostream>
using namespace std;
int main(){
	int a,b,c;
	int m=1000;
	double max=0,res;
	for(a=1;a<=m;a++){		
		for(b=1;b<=m;b++){	
			for(c=1;c<=m;c++){
				if(a+b>c && b+c>a && a+c>b){
					res=a*1.0/(b+c)+b*1.0/(a+c)+c*1.0/(a+b);
					if(res>max){
						max=res;
					}
				}
			}
		}
	}
	cout<<max;
	return 0;
} 
