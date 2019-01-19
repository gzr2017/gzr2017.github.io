---
title: macOS+VSCode+LaTex指北
date: 2019-01-19 21:51:52
tags:
---

* # 安装 MacTex

  到 [MacTex 官网](http://www.tug.org/mactex/)下载安装 MacTex。建议都下，下lite版说不定之后差哪个宏呢？

* # 配置 VSCode 环境

  装下面两个插件：

  1. LaTeX Workshop
  2. Save and Run

* # 配置 LaTeX 中文环境

  在`setting.json`中粘贴如下内容：

  ```json
  "latex-workshop.latex.tools": [
          {
              "name": "latexmk",
              "command": "latexmk",
              "args": [
                  "-synctex=1",
                  "-interaction=nonstopmode",
                  "-file-line-error",
                  "-pdf",
                  "%DOC%"
              ]
          },
          {
              "name": "xelatex",
              "command": "xelatex",
              "args": [
                  "-synctex=1",
                  "-interaction=nonstopmode",
                  "-file-line-error",
                  "%DOC%"
              ]
          },
          {
              "name": "pdflatex",
              "command": "pdflatex",
              "args": [
                  "-synctex=1",
                  "-interaction=nonstopmode",
                  "-file-line-error",
                  "%DOC%"
              ]
          },
          {
              "name": "bibtex",
              "command": "bibtex",
              "args": [
                  "%DOCFILE%"
              ]
          }
      ],
      "latex-workshop.latex.recipes": [
          {
              "name": "xelatex",
              "tools": [
                  "xelatex"
              ]
          },
          {
              "name": "pdflatex",
              "tools": [
                  "pdflatex"
              ]
          },
          {
              "name": "latexmk",
              "tools": [
                  "latexmk"
              ]
          },
          {
              "name": "pdflatex -> bibtex -> pdflatex*2",
              "tools": [
                  "pdflatex",
                  "bibtex",
                  "pdflatex",
                  "pdflatex"
              ]
          }
      ],
  ```

  这个时候可以测试一下支不支持中文：

  ```latex
  \documentclass{ctexart}
  
  \begin{document}
  我爱\LaTex
  \end{document}
  ```

* # 配置自动缩进

  虽然 VSCode 有 [latex-formatter](https://marketplace.visualstudio.com/items?itemName=nickfode.latex-formatter) 这个插件，但 是不知道为什么用不了。 那就自己动手丰衣足食吧……

  * ## 下载 `latexindent.pl`

    `clone` 这个[repo](https://github.com/cmhughes/latexindent.pl)。

  * ## `build latexindent`

    首先保证你的电脑里装了 `cmake`。`cd` 到 `clone` 的目录，执行以下命令：

    ```bash
    mkdir build && cd build 
    cmake ../path−helper−files 
    sudo make install
    ```

    这个时候可以用 `which latexindent.pl` 测试一下安装成功没有。

  * ## 安装支持

    `macOS`自带`Perl`，这很OK。执行以下命令安装支持：

    ```shell
    cpan Log::Log4perl
    cpan Log::Dispatch::File
    cpan YAML::Tiny
    cpan File::HomeDir
    ```

    执行：

    ```
    latexindent.pl /Users/guozirui/Desktop/latex开发指北/latex开发指北.tex
    ```

    看可不可以用。

  * ## 配置格式化时自动保存

    这个时候执行：

    ```shell
    latexindent.pl --overwrite /Users/guozirui/Desktop/latex开发指北/latex开发指北.tex
    ```

    是会报错的，我也不知道为什么，我更不会写Perl。那就割以永治吧……

    打开这个文件：

    ```
    /usr/local/bin/LatexIndent/BackUpFileProcedure.pm
    ```

    注释掉最后一行：

    ```perl
    copy($fileName,$backupFile) or die "Could not write to backup file $backupFile. Please check permissions. Exiting.";
    ```

  * ## 配置自动格式化

    把这个粘贴到`setting.json`就ojbk了：

    ```json
    "saveAndRun": {
            "commands": [
                {
                    "match": "\\.tex$",
                    "cmd": "latexindent.pl --overwrite ${file}",
                    "useShortcut": false,
                    "silent": false
                },
            ]
        }
    ```

    