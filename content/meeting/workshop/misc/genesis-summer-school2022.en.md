---
title: "GENESIS Summer School 2022"
date: 2025-08-26T10:45:14+09:00
draft: false
description: ''
keywords: []
categories: ['Workshop']
hide_sidebar: true
---


# GENESIS Summer School 2022

Aug. 1 (Mon.)- 2 (Tue.), 2022, online

## 概要 Summary

GENESIS (GENeralized-Ensemble SImulation System)は様々な生体分子（タンパク質、核酸、リガンド低分子など）やその複合体を対象にした分子動力学(MD)計算を行うためのソフトウェアです。「富岳」などのスーパーコンピュータによる効率的な大規模並列計算を実現できることが大きな特長です。
本サマースクールでは、GENESISを利用したMD計算の理論と実践の両方を学べるよう、レクチャーおよび「富岳」での計算を実際に体験できるハンズオンチュートリアルを実施します。
初めてMD計算に触れる方からより深く学びたい方、GENESISに興味をお持ちの方まで幅広い参加者を対象としています。
ふるってご参加ください。  
  
GENESIS (GENeralized-Ensemble SImulation System) is software for molecular dynamics (MD) calculations on various biomolecules (proteins, nucleic acids, small molecules, etc.) and their complexes. A key feature of the software is its ability to perform efficient large-scale parallel computations on supercomputers such as Fugaku. In this summer school, lectures and hands-on tutorials will be held so that participants can learn both theory and practice of MD calculations using GENESIS. A wide range of participants, from those who are new to MD calculations to those who want to learn more deeply and are interested in GENESIS, are invited to attend. We look forward to your participation.

## 参加申し込み Registration

~~以下のフォームで7月10日までにお申し込みください~~締め切りました。参加費は無料です。  
登録は所属先のメールアドレスをご使用ください。（gmail等の利用不可）  
チュートリアルの各コースには定員（5名）がありますので、お早めの登録をお勧めします。  
  
~~Please register by the 10th of July using the form below~~Registration closed. Participation is free of charge.  
Please use the email address of your affiliation. (Gmail or other free email addresses are not accepted.)  
Early registration is recommended since each tutorial course has a limited number (5) of places available.  
  

## 対象者 Applicants

大学学部・院生、ポスドク・助教等アカデミックの若手研究者  
希望者が多い場合、同じ研究室からの参加は2名程度に限らせて頂く場合があります。  
  
Undergraduate and graduate students, post-doctoral fellows, assistant professors, and other young researchers in academia.  
If there are many participation requests, we may restrict a maximum number of 2 people or so from one laboratory.

## 場所 Venue

オンライン online（Zoom）

## プログラム Program

本サマースクールは全員で受講するMD計算の基礎・発展知識のレクチャーと実際にプログラムを動かして計算するハンズオンチュートリアルで構成されています。ハンズオンチュートリアルでは基礎編と発展編を参加者のみなさんに選んでいただき、Zoomのブレイクアウトルームを利用していくつかのグループに分かれて実施します。  
  
This summer school consists of lectures on basic and advanced knowledge of MD calculations and hands-on tutorials where participants run the program and perform calculations. In the hands-on tutorials, participants can choose between basic and advanced topics and are divided into several groups using Zoom breakout rooms.  
  

### 8月1日（月）

|  |  |
| --- | --- |
| 9:45 | Zoom open |
| 10:00 – 10:10 | はじめに（杉田）  Opening remarks（Sugita） |
| 10:10 – 10:40 | 講義1: MDの基本とGENESISの使い方（小林）  Lecture 1: MD Basics and usage of GENESIS (Kobayashi) |
|  | Break |
| 10:50 – 11:20 | 講義2: gREST法の紹介（新津）  Lecture 2: gREST introduction (Niitsu) |
| 11:20 – 11:50 | Lecture 3: Applications of gREST (Dokainish) |
|  | Lunch break |
| 13:00 – 14:30 | Hands-on tutorial |
|  | Break |
| 14:45 – 16:15 | Hands-on tutorial |
| 16:15 – 17:00 | Free discussion |

### 8月2日（火）

|  |  |
| --- | --- |
| 10:00 – 11:00 | 講義4: GENESIS/QSimulateによるQM/MM計算（八木）  Lecture 4: QM/MM calculation using GENESIS/QSimulate (Yagi) |
|  | Break |
| 11:10 – 12:10 | 講義5: MD 計算に基づくクライオ電顕フレキシブル・フィッティング（森）  Lecture 5: Cryo-EM flexible fitting using molecular dynamics simulation (Mori) |
|  | Lunch break |
| 13:00 – 14:30 | Hands-on tutorial |
|  | Break |
| 14:45 – 16:15 | Hands-on tutorial |
| 16:15 – 17:00 | Free discussion |

## ハンズオンチュートリアルについて About hands-on tutorials

### コースの紹介　Courses

ベーシックコース Basic course

GENESISの基本的な使い方と基礎的なMD計算・分析  
Basic usage of GENESIS and how to run an MD simulation and analysis tools  
  
アドバンスコース Advanced courses

1. 拡張アンサンブル法　Enhanced sampling method  
  
拡張アンサンブル法の1つである、レプリカ交換MDやgREST法を用いて、ペプチドの自由エネルギー面の計算法を学びます。  
One of the enhanced sampling methods, Replica-exchange MD and gREST, will be carried out to calculate the free-energy surface of peptides.  
  
2. QM/MM計算　QM/MM calculation  
  
GENESIS/QSimulateを用いて、QM/MM法の基礎を学び、酵素反応の反応経路を探索します。  
GENESIS/QSimulate will be used to learn the basics of the QM/MM method and to demonstrate the reaction path search of enzyme reactions.  
  
3. Cryo-EMフィッティング Cryo-EM fitting  
  
GENESISを用いて、MD 計算に基づくタンパク質の電顕像フィッティング計算を行います。  
We demonstrate an MD-based cryo-EM flexible fitting of protein using GENESIS.  

### 参加にあたっての準備 Preparations prior to tutorials

「富岳」へはsshを用いて接続を行います。sshが利用できるターミナルソフトウェア(Windowsの場合はPuTTy, PowerShell, WSL等)をあらかじめご用意ください。「富岳」の接続方法はアカウント作成時にご案内します。接続できない場合は実習ができませんので必ず事前にご準備をお願いします。  
  
Please prepare in advance a terminal software that can use ssh (e.g., PuTTy, PowerShell, WSL, etc., for Windows). We will inform you how to connect to Fugaku when we create your account. If you cannot connect, you will not be able to participate in the practical training, so please make sure to have it on your computer.  
  
「富岳」での実習ではUnixの基本的なコマンド（cd, ls, cp, vi\emacs, tar等）に慣れていることを前提として進めます。ご承知おきください。  
  
The tutorials on Fugaku assume that you are familiar with basic Unix commands (e.g., cd, ls, cp, vi/emacs, tar, etc.).

## 使用言語 Language

講義：日本語 (Lecture 1, 2, 4, 5 )、 英語 (Lecture 3)  
ハンズオン：日本語および英語  
  
Lecture: Japanese (Lectures 1, 2, 4, and 5) or English (Lecture 3)   
Hands-on: Japanese or English  

## 世話人 Organizers

杉田有治, 八木清, Weitong Ren, Hisham Dokainish, 新津藍 （理化学研究所，杉田理論分子科学研究室）  
Yuji Sugita, Kiyoshi Yagi, Weitong Ren, Hisham Dokainish, Ai Niitsu (Theoretical Molecular Science Lab, Riken)  
  

## 主催 Host

理化学研究所　計算科学研究センター   
RIKEN R-CCS

## 共催 Co-organizers

学術変革研究A（クロススケール新生物学）、富岳成果創出加速課題（細胞内分子動態）、理化学研究所新領域開拓課題（細胞内環境の生物学）、理研CPR、理研BDR、GENESIS Users’ Group  

## 問い合わせ先 Contact

特定国立研究開発法人理化学研究所 開拓研究本部 杉田理論分子科学研究室  
〒351-0198埼玉県和光市広沢2-1  
  
RIKEN CPR Theoretical Molecular Science Laboratory  
2-1 Hirosawa, Wako, Saitama  
351-0198 Japan  
  
Tel: 048-462-1407  
Email: kiyoshi.yagi [at] riken.jp（八木）/ ai.niitsu [at] riken.jp（新津）(atを＠へ変更してください change "at" to "@"）
  
  
  
The top banner has been created by Dr Cheng Tan and Dr Weitong Ren.
