//----------------------------------------------
//REFACTOR
//----------------------------------------------
function hero(bullets, dragons){
    return bullets >= dragons * 2 ? true : false;
}

//----------------------------------------------
//ORIGINAL
//----------------------------------------------
function hero(bullets, dragons){
    if(bullets >= dragons * 2)
    {
        return true;
    }
    else
    {
        return false;
    }
}

