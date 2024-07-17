---
layout: post
title: Introduction to Datasets
date: 2024-07-16
description: A concise guide to the basics of datasets
tags: Intro-to-Datasets Intro-to-DL Transforms-Image Load-Dataset-Builder Load-Dataset Get-Dataset-Split-Names Get-Dataset-Config-Names DatasetInfo
categories: Deep-Learning
author: Dmitry Ryumin
last_updated: 2024-07-17
# toc:
#   - name: 
# _styles: >
---

## Datasets Library

> Easily access and share datasets for audio, computer vision, and natural language processing (NLP) tasks.

{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/datasets_hf_en.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/datasets_hf_en.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>The Jupyter Notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
