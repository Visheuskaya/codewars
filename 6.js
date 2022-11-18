const quarterOf = (month) => {
    switch(month>0 && month<13){
                    case month>0 && month<=3:
                        return 1;
                        break;
                    case month>3 && month<=6:
                        return 2;
                        break;
                    case month>6 && month<=9:
                        return 3;
   
                        break;
                    case month>9 && month<=12:
                        return 4;
                        break;
                    default:
                        break;
                }
            }// Your code here