import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

var gitalk = new Gitalk({
    clientID: '0f8bdcbe6b4973f9b206',
    clientSecret: '4939e64d59c93fc5eb7eaf74469a746e4535700d',
    repo: 'git@github.com:cvvz/blog-comment.git',
    owner: 'cvvz',
    admin: ['cvvz'],
    id: location.pathname,      
    distractionFreeMode: true 
  })
  
  gitalk.render('gitalk-container')