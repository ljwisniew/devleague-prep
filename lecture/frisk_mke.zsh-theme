PROMPT=$'%{$fg[blue]%}%/%{$reset_color%} $(git_prompt_info)
%{$fg_bold[black]%}>%{$reset_color%} '
RPROMPT='%{$fg[white]%}[%T]%{$reset_color%}'
PROMPT2="%{$fg_blod[black]%}%_> %{$reset_color%}"

GIT_CB="git::"
ZSH_THEME_SCM_PROMPT_PREFIX="%{$fg[green]%}["
ZSH_THEME_GIT_PROMPT_PREFIX=$ZSH_THEME_SCM_PROMPT_PREFIX
ZSH_THEME_GIT_PROMPT_SUFFIX="]%{$reset_color%} "
ZSH_THEME_GIT_PROMPT_DIRTY=" %{$fg[red]%}*%{$fg[green]%}"
ZSH_THEME_GIT_PROMPT_CLEAN=""
