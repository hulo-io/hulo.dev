---
title: Control Flow
icon: fas fa-puzzle-piece
date: 2025-04-14
category: blueprint
tag: 
    - bash
    - flow
license: MIT
---

## 条件判断参数

### 🔢 整数比较
::: warning
只能用于整数
:::

| 表达式      | 含义 | 等价于 |
| ----------- | ----------- | ----------- |
| `-eq` |	等于	|  == |
| `-ne` |	不等于  | != |
| `-gt` |	大于	|  > |
| `-ge` |	大于等于 | >= |
| `-lt` |	小于	 | < |
| `-le` |	小于等于 | <= |

### 🧵 字符串判断

| 表达式      | 含义 | 等价于 |
| ----------- | ----------- | ----------- |
| -z "$str" |	字符串长度为 0（空字符串）| $str.length == 0 或 ! $str.length |
| -n "$str" | 字符串长度不为 0 | $str.length != 0 或 $str.length |
| "$a" = "$b" |	字符串相等| $a == $b |
| "$a" != "$b" | 字符串不相等 | $a != $b |

### 🔀 逻辑判断
| 表达式      | 含义 | 等价于 |
| ----------- | ----------- | ----------- |
| `-a`      | 与       | & |
| `-o`   | 或        | \| |
| `!`   | 非        | ! |
| `&&`   | 条件与（用于多个 `[ ... ]`）| && |


### 📁 文件相关

| 表达式      | 含义 | 等价于 |
| ----------- | ----------- | ----------- |
| `-e` | 文件存在 | f"file.txt".exist |
| `-f` | 是普通文件（非目录）| f"file.txt".is_file 或 ! f"file.txt".is_dir |
| `-d` | 是目录 | f"dir/".is_dir() |
| `-r` | 文件可读 |	f"file.txt".readable |
| `-w` | 文件可写 | f"file.txt".writable |
| `-x` | 文件可执行 | f"script.sh".executable |
| `-s` | 文件大小非 0 | f"file.txt".size |
| `-L` | 是符号链接 | f"link.txt".is_symbol_link |
| `-h` | 同 -L，也是符号链接 | f"link.txt".is_symbol_link |
| `-b` | 是块设备文件 | f"/dev/sda".is_block_dev |
| `-c` | 是字符设备文件 | f"/dev/tty0".is_char_dev |
| `-p` | 是命名管道（FIFO）| f"fifo.pipe".is_pipe |
| `-S` | 是 socket 文件	| f"/tmp/mysock".is_sock |
| `-u` | 设置了 SUID 位 | f"somefile".suid |
| `-g` | 设置了 SGID 位	| f"somefile".sgid |
| `-k` | 设置了粘着位（sticky bit）| f"/tmp".sticky |
| file1 -nt file2 |	file1 比 file2 新 |	f"file1" > f"file2" |
| file1 -ot file2 | file1 比 file2 旧 |	f"file1" < f"file2" |
| file1 -ef file2 | file1 和 file2 是同一个文件（硬链接）|	f"file1" == f"file2" |
