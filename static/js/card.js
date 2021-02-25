var updatebtns = document.getElementsByClassName('update-card')

for(var i=0; i<updatebtns.length;i++){
    updatebtns[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log(productId, action)
        user
        if(user==='AnonymousUser'){
            console.log('Hello this is AnonymousUSer')
        }else{
            console.log(user)
        }
    })
}
