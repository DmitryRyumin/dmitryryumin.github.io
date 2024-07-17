---
layout: post
title: Введение в библиотеку Datasets
date: 2024-07-16
description: Краткое руководство по основам библиотеки Datasets
tags: Intro-to-Datasets Intro-to-DL Transforms-Image Load-Dataset-Builder Load-Dataset Get-Dataset-Split-Names Get-Dataset-Config-Names DatasetInfo
categories: Deep-Learning
author: Дмитрий Рюмин
last_updated: 2024-07-17
# toc:
#   - name: 
# _styles: >
---

## Библиотека Datasets

> Удобный доступ и обмен наборами данных для задач аудио, компьютерного зрения и обработки естественного языка (NLP).

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/datasets_hf_ru.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/datasets_hf_ru.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Извините, но Jupyter Notebook, который вы ищете, не существует.</p>
{% endif %}
{:/nomarkdown}
