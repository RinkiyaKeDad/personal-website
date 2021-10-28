Getting Started With Kubernetes As A Developer

Are you tired of listening to everyone in DevOps talk about “Kubernetes” while you are still struggling with how to pronounce it? Unless you started programming today, I’m pretty sure you have heard the word but most likely as a developer you haven’t gotten the chance to learn about it - maybe because it seems intimidating or maybe because you aren’t sure how it’s useful for you. 

Let me take you on a journey from being a developer clueless about Kubernetes to one who can understand all the mumbo jumbo the infra team talks about. In the process, you’ll also start appreciating its beauty and usefulness in increasing developer productivity. We’ve got a lot to cover over the course of this series, so let’s jump right in!

The Death Of “It Works On My Machine!”
It is important to have an understanding of containers before talking about Kubernetes. Containers are executable packages of software that contain all the code and dependencies necessary to run an application anywhere. And by anywhere I literally mean anywhere - my laptop, your laptop or even on “the cloud”. 

Are containers starting to sound similar to virtual machines? Well they are not, and in fact they are even better! Why? Because unlike VMs, containers do not contain operating system images. This means they are much more lightweight! To create and run containers locally you would use a container engine like Docker.

Containers grew in popularity because they truly embraced the ideology of write once, run anywhere. Because of how fast and easy it is to deploy containers, they increased developer productivity significantly. A fun fact is that Okteto also utilizes these containers to give you a live preview of the changes you make while developing locally. 

But as more and more companies started using containers a new problem arose. How do you manage thousands of containers running on distributed systems? And that’s where Kubernetes saved the day!

Kubernetes To The Rescue!
Kubernetes, often abbreviated as K8s, is a container orchestration platform. Let me explain this in very simple terms. 

Let’s say you have your app which you have containerized. So you run a bunch of containers to serve your app to users. But how do you manage these different containers? The situation is complicated even more by the fact that these containers needn’t necessarily be running on the same machine!

This is where K8s comes to the rescue. It makes deploying, managing and scaling containerized workloads a breeze! I want to explicitly call out here that K8s is NOT a container engine like Docker. Rather it is a container orchestrator. 

As a developer you won’t need to worry about “how” K8s does all this orchestration. You probably also will not have to set up a K8s cluster for your application. But what you would mostly be doing is interacting with a cluster set up for you by the infrastructure team. So it becomes important to be familiar with the K8s objects you’ll be interacting with. That’s what we’ll be focusing on in the articles in this series. 

Before we do that, let’s have a high level idea about the architecture of Kubernetes so that you’re not totally clueless about what is happening under the hood.

Kubernetes Under The Hood
In the Kubernetes world a machine is called a node. A K8s “cluster” is nothing but a group of nodes that run your containerized application. These nodes may be bare metal servers in your home or instances you’re running on a cloud provider. These nodes are also of two types: worker and master. 

The worker nodes are the ones where your application’s containers would actually be running. Kubernetes actually uses an object called Pod to run these containers but more on that in the next article. Three essential things running on a worker node in a Kubernetes cluster are:

Container runtime: This should be no surprise since a container runtime is what is actually responsible for running containers. Kubernetes supports multiple container runtimes including Docker and containerd.
kubelet: This is the agent which is responsible for communicating with the Kubernetes control plane running on the master node. It is responsible for executing any instructions it receives from the control plane. It also makes sure that containers are running in the pods properly.
kube-proxy: This is a network proxy running on each node. Not going into much detail, you can think of it as being responsible for network communications within the cluster as well as outside the cluster. We’ll be exploring how all these communications happen between pods in a future article. 

The master node is the one which has all the components of the Kubernetes control plane running on it. You can also set up multiple master nodes for high availability. Following are some important control plane components you should be familiar with:

kube-apiserver: This exposes the Kubernetes API which we can use to talk to our K8s cluster. This can be thought of as the frontend for the Kubernetes control plane. 
etcd: This is the distributed key value store where all cluster related data is stored. For security reasons it is only accessible through the API server. This also helps ensure that the data stored in etcd is consistent.
kube-scheduler: This is responsible for scheduling pods on available worker nodes. While scheduling it takes into consideration resource requirements of the pod and any other constraints that we specify.
kube-controller-manager: A controller in K8s is responsible for observing an object and making sure that the current state of that object matches the desired state that we specified. There are various controllers in K8s for different objects. All these are combined into a single binary which is the kube-controller-manager.
cloud-controller-manager: This is the component which lets you link your cluster to a cloud provider. This binary contains all the cloud provider specific controllers. So when something like a node termination happens in the cloud provider then this component will be responsible for handling that.

And this covers all the basics of the Kubernetes architecture. The really cool thing is that while it is good to have this knowledge, as a Developer you probably won’t have to worry about any of this at all especially if your team is using development environments like those provided by Okteto. 

When you use Okteto you are able to develop from the comfort of your favorite IDE while at the same time you’re able to see changes you make to your app live without having to commit, build, push, or deploy! You get to see a deployed preview of your changes exactly as users would see in production since Okteto deploys on an actual Kubernetes cluster. 

In the next article, we’ll start diving deeper into common Kubernetes objects. We will explore the Pods I mentioned briefly here and see how they can be managed using a Deployment - which is another important Kubernetes object. So while you wait for the next article in the series, why don’t you go give Okteto a try and see the magic for yourself? :)




