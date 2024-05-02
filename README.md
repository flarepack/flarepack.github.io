<h1 align="center">
  Flarepack
</h1>

<h4 align="center">
  <a href="https://flarepack.github.io">Website</a>
</h4>

<p align="center">
  Modular building blocks for applications built on [Cloudflare's platform](https://developers.cloudflare.com/).
</p>

## What is Flarepack

Flarepack is a set of modular [Workers](https://workers.cloudflare.com/) and tools that allow you to quickly build rich, reliable, and performant applications on top of Cloudflare's edge network. Flarepack workers can be deployed with one click and interact with any of your Pages or Workers applications using Cloudflare's [JavaScript-native RPC](https://blog.cloudflare.com/javascript-native-rpc).

## Projects
- [Switchboard](https://github.com/flarepack/switchboard)   
Effortlessly to send notifications to Discord, Slack, Teams, Email, and other services. For example to send a message as a bot to a discord channel all you need to do is add `await env.SWITCHBOARD.sendDiscord(channel, 'msg');` to your app and everything else taken care of.