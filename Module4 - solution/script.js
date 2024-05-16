let names=new Array();
names[0]="Nikhil";
names[1]="Jango";
names[2]="Jennifer";
names[3]="javed";
names[4]="dave";
names[5]="sarah";
names[6]="david";
names[7]="Natasha";
names[8]="jorge";

for (let i = 0; i < names.length; i++) {
    if(names[i].charAt(0)=='J'|| names[i].charAt(0)==='j'){
    console.log("Goodbye "+ names[i])
    }
    else{
        console.log("Hello "+ names[i]);
    }
}
