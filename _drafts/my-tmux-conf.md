---
layout: post
title:  "An explanation of my .tmux.conf and tmux plugins"
date:   2018-07-30 21:50:00
categories: tmux customisation
image: 
  feature: tmux/tmux-1920px.png
  thumb: tmux/tmux-100px.png
---

Last year, I posted a line-by-line explanation of [my .vimrc]({% post_url 2017-09-04-my-vimrc %}). I've decided to do the same here with my [.tmux.conf](https://github.com/williambl/dotfiles/blob/master/.tmux.conf). tmux is a very useful tool for productivity in the terminal. I've actually set Konsole to run `/usr/bin/tmux` rather than `/bin/bash`, which allows me to go straight into it.

```conf
set -g default-terminal "xterm-256color"
```
This sets the terminal type to `xterm-256color`. If you have another terminal type, then use that instead.


```conf
set -g mouse on
```
This allows mouse interaction with tmux (clicking on panes to switch them, etc.)

```conf
bind | split-window -h
bind - split-window -v
unbind '"'
unbind %
```
Replaces the hard-to-remember `"` and `%` to split the window with `-` and `|`

```conf
bind r source-file ~/.tmux.conf
```
This allows you to reload the `.tmux.conf` file by pressing `r`; very useful when making many changes.

```conf
set-option -g allow-rename off
```
If you set a custom name for a window, this stops that name being automatically overwritten.

```conf
bind h select-pane -L
bind j select-pane -D 
bind k select-pane -U
bind l select-pane -R
```
This allows you to move between panes with vim directions.

```conf
bind -n M-h select-pane -L
bind -n M-j select-pane -D 
bind -n M-k select-pane -U
bind -n M-l select-pane -R
```
This lets you move between panes with meta and the direction key, rather than having to press the prefix beforehand.

```conf
bind -n S-Left  previous-window
bind -n S-Right next-window
```
Easy movement between windows with shift left and right.

Everything from here requires [tmux plugin manager](https://github.com/tmux-plugins/tpm), aka tpm.

```conf
set -g @plugin 'tmux-plugins/tpm'
```
Enables tpm.

```conf
set -g @plugin 'tmux-plugins/tmux-sensible'
```
Adds sensible defaults for tmux using tpm.

```conf
set -g @plugin 'jimeh/tmux-themepack'
```
Adds a themepack for tmux using tpm.

```conf
set -g @themepack 'powerline/block/cyan'
```
Sets the theme (from the themepack above) to a cyan powerline theme.

```conf
run '~/.tmux/plugins/tpm/tpm'
```
Runs tpm. This needs to be at the end.
