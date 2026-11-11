---
layout: work
title: "Lightweight Face Recognition for Edge Video Deployment via MagFace-Guided Knowledge Distillation and Track-Level Quality-Aware Retrieval"
slug: lightweight-face-recognition-edge-video
permalink: /works/lightweight-face-recognition-edge-video/
record_label: Student research preprint
authors:
  - name: Phong Quoc Truong
    affiliation: Vietnamese-German University (VGU), Ho Chi Minh City, Vietnam
    email: 104240579@student.vgu.edu.vn
  - name: Hieu Dinh Trung Pham
    affiliation: Vietnamese-German University (VGU), Ho Chi Minh City, Vietnam
    email: 104240027@student.vgu.edu.vn
  - name: Khang Minh Le
    affiliation: Vietnamese-German University (VGU), Ho Chi Minh City, Vietnam
    email: 104240055@student.vgu.edu.vn
date: 2026-07-09
category: project
field: Computer Vision & Edge AI
keywords:
  - face recognition
  - knowledge distillation
  - MobileNetV4
  - MagFace
  - edge AI
  - video analytics
abstract: "Modern face-recognition models can be accurate but expensive to run on an edge device, and image-only evaluations do not cover the detection, tracking, and retrieval decisions required in video. This work presents a lightweight video face-recognition pipeline based on a MobileNetV4-Conv-Medium student distilled from a frozen MagFace iResNet-100 teacher. Three independently trained variants are evaluated to balance clean verification and partial-occlusion robustness. The resulting encoder is integrated with YOLO-based detection, landmark alignment, tracking, liveness filtering, MagFace quality gating, track-level pooling, and FAISS-based retrieval."
status: "Achieved a maximum grade of 10/10 for the final project in Introduction to AI and Data Science."
version: "1.0"
cover: images/training-pipeline.png
github_url: https://github.com/Prism190/VGU_FaceRec_Project
supplements:
  - title: Original PDF Paper
    file: supplements/paper.pdf
    type: pdf
featured: true
citation_ready: true
math: true
references:
  - "Q. Meng, S. Zhao, Z. Huang, and F. Zhou, _MagFace: A Universal Representation for Face Recognition and Quality Assessment_, arXiv:2103.06627, 2021."
  - "H. Wang, Y. Wang, Z. Zhou, X. Ji, D. Gong, J. Zhou, Z. Li, and W. Liu, _CosFace: Large Margin Cosine Loss for Deep Face Recognition_, arXiv:1801.09414, 2018."
  - "J. Deng, J. Guo, J. Yang, N. Xue, I. Kotsia, and S. Zafeiriou, _ArcFace: Additive Angular Margin Loss for Deep Face Recognition_, IEEE TPAMI, 44(10):5962–5979, 2022. DOI: 10.1109/TPAMI.2021.3087709."
  - "S. Chen, Y. Liu, X. Gao, and Z. Han, _MobileFaceNets: Efficient CNNs for Accurate Real-Time Face Verification on Mobile Devices_, arXiv:1804.07573, 2018."
  - "D. Qin et al., _MobileNetV4 — Universal Models for the Mobile Ecosystem_, arXiv:2404.10518, 2024."
  - "W. Park, D. Kim, Y. Lu, and M. Cho, _Relational Knowledge Distillation_, arXiv:1904.05068, 2019."
  - "P. Izmailov, D. Podoprikhin, T. Garipov, D. Vetrov, and A. G. Wilson, _Averaging Weights Leads to Wider Optima and Better Generalization_, arXiv:1803.05407, 2019."
  - "J. Deng, J. Guo, Y. Zhou, J. Yu, I. Kotsia, and S. Zafeiriou, _RetinaFace: Single-stage Dense Face Localisation in the Wild_, arXiv:1905.00641, 2019."
  - "G. Jocher and J. Qiu, _Ultralytics YOLO11_, version 11.0.0, 2024. <a href='https://github.com/ultralytics/ultralytics'>Repository</a>."
  - "J. Redmon, S. Divvala, R. Girshick, and A. Farhadi, _You Only Look Once: Unified, Real-Time Object Detection_, arXiv:1506.02640, 2016."
  - "N. Wojke, A. Bewley, and D. Paulus, _Simple Online and Realtime Tracking with a Deep Association Metric_, arXiv:1703.07402, 2017."
  - "N. Aharon, R. Orfaig, and B.-Z. Bobrovsky, _BoT-SORT: Robust Associations Multi-Pedestrian Tracking_, arXiv:2206.14651, 2022."
  - "M. Douze et al., _The Faiss Library_, arXiv:2401.08281, 2024."
  - "Z. Ming, M. Visani, M. M. Luqman, and J.-C. Burie, _A Survey On Anti-Spoofing Methods For Face Recognition with RGB Cameras of Generic Consumer Devices_, arXiv:2010.04145, 2020."
  - "G. Hinton, O. Vinyals, and J. Dean, _Distilling the Knowledge in a Neural Network_, arXiv:1503.02531, 2015."
  - "D. Wang, X. Lu, and A. Rinaldo, _DBSCAN: Optimal Rates For Density Based Clustering_, arXiv:1706.03113, 2019."
  - "Y. Guo, L. Zhang, Y. Hu, X. He, and J. Gao, _MS-Celeb-1M: A Dataset and Benchmark for Large-Scale Face Recognition_, arXiv:1607.08221, 2016."
  - "G. Huang, M. Mattar, T. Berg, and E. Learned-Miller, _Labeled Faces in the Wild: A Database for Studying Face Recognition in Unconstrained Environments_, technical report, 2008."
  - "S. Sengupta, J.-C. Chen, C. D. Castillo, V. M. Patel, R. Chellappa, and D. W. Jacobs, _Frontal to Profile Face Verification in the Wild_, WACV, 2016."
  - "S. Moschoglou, A. Papaioannou, C. Sagonas, J. Deng, I. Kotsia, and S. Zafeiriou, _AgeDB: The First Manually Collected, In-the-Wild Age Database_, CVPRW, 2017."
  - "C. Whitelam et al., _IARPA Janus Benchmark-B Face Dataset_, CVPRW, 2017."
  - "B. Maze et al., _IARPA Janus Benchmark - C: Face Dataset and Protocol_, ICB, 2018. DOI: 10.1109/ICB2018.2018.00033."
  - "T. Zheng and W. Deng, _Cross-Pose LFW: A Database for Studying Cross-Pose Face Recognition in Unconstrained Environments_, 2018."
  - "T. Zheng, W. Deng, and J. Hu, _Cross-Age LFW: A Database for Studying Cross-Age Face Recognition in Unconstrained Environments_, arXiv:1708.08197, 2017."
---


## Introduction

Face recognition systems are increasingly deployed in real-world video scenarios such as access control, surveillance, and attendance monitoring. Although modern deep face recognition models achieve strong accuracy on standard benchmarks, they are often too computationally expensive for edge deployment and are usually evaluated under image-level settings. Practical video-based recognition requires not only an accurate embedding model, but also robust detection, alignment, tracking, liveness filtering, quality control, and identity retrieval.

This work presents a lightweight video face recognition pipeline based on a MobileNetV4-Conv-Medium student distilled from a frozen MagFace iResNet-100 teacher. The student learns 512-dimensional face embeddings using a combination of MagFace classification loss and embedding-level knowledge distillation. To study the trade-off between clean accuracy and robustness, we evaluate three independently trained variants of the same teacher-student framework: a clean KD baseline, a spatial-KD variant with aggressive occlusion curriculum, and an SWA-stabilized variant designed for occluded faces. These variants are not sequential training stages; each is trained from scratch under a different objective and augmentation policy.

The distilled model is integrated into an end-to-end runtime pipeline consisting of YOLO-based face detection, 5-point alignment, tracking, liveness filtering, MagFace magnitude-based quality gating, magnitude-weighted track pooling, and FAISS-based identity retrieval. This design allows the system to exploit temporal information from video rather than relying on single-frame predictions. Experimental results show that the clean KD variant provides the best low-FAR verification performance on clean faces, while the SWA-based robust variant reduces degradation under lower-face occlusion. The proposed system therefore provides a practical trade-off between recognition accuracy, robustness, and deployment efficiency for edge-oriented face recognition.

![Training pipeline for the three independently trained teacher-student variants.]({{ page.url | append: 'images/training-pipeline.png' | relative_url }})

*Figure 1. Training pipeline. The frozen MagFace teacher receives a clean image while the MobileNetV4 student learns from an augmented view. V1 targets clean recognition, V2 evaluates aggressive spatial-occlusion KD, and V3 adds milder occlusion training with SWA for robustness.*

The three variants are independent experiments, not sequential fine-tuning phases:

| Variant | Spatial KD | Occlusion policy | SWA | Intended role |
| --- | --- | --- | --- | --- |
| V1: Clean KD | No | Light lower-face masking | No | Clean-face deployment |
| V2: Spatial-occlusion KD | Yes | Aggressive masking and blur | No | Diagnostic ablation |
| V3: Robust-SWA KD | Yes | Milder masking and blur | Yes | Partial-occlusion deployment |

![All visible subjects correctly recognized by the system.]({{ page.url | append: 'images/qualitative-clean-recognition.png' | relative_url }})

*Figure 2. Qualitative result: all visible subjects are recognized by the system.*

![Recognition remains stable under partial face occlusion.]({{ page.url | append: 'images/qualitative-partial-occlusion.png' | relative_url }})

*Figure 3. Qualitative result: the system maintains recognition under partial face occlusion.*

![A heavily occluded subject wearing a VR headset is rejected as unknown.]({{ page.url | append: 'images/qualitative-vr-unknown.png' | relative_url }})

*Figure 4. Qualitative result: a heavily occluded face wearing a VR headset is rejected as unknown. Green boxes indicate accepted identities; yellow indicates an unknown identity.*

## Related work

### Face recognition

Deep face recognition has achieved strong performance through discriminative embedding learning. Instead of directly comparing raw images, modern systems learn compact face embeddings in which samples from the same identity are close together and samples from different identities are separated. Margin-based softmax losses have played an important role in this progress. CosFace introduces an additive cosine margin in the normalized feature space, while ArcFace applies an additive angular margin to enforce stronger inter-class separation with a clear geometric interpretation. These methods have become standard objectives for face verification and identification.

MagFace further extends margin-based face recognition by associating feature magnitude with face quality. In MagFace, high-quality face samples are encouraged to produce embeddings with larger magnitude, while low-quality or ambiguous samples tend to have smaller magnitude. This is useful not only during training but also during deployment, because embedding magnitude can be used as a quality indicator. Our system follows this idea by using a MagFace iResNet-100 model as the teacher and by using embedding magnitude for quality filtering and track-level pooling in the video pipeline.

### Lightweight face recognition and edge deployment

Although large face recognition models can achieve high accuracy, they are often too computationally expensive for edge devices or real-time video applications. This has motivated the development of lightweight architectures such as MobileFaceNets and MobileNet-based models. These networks reduce parameter count and computational cost while attempting to preserve recognition accuracy.

MobileNetV4 continues this direction by providing efficient building blocks designed for mobile and edge hardware. In this work, MobileNetV4-Conv-Medium is used as the student backbone. However, training a compact model only with classification supervision may not be sufficient to match the representation quality of larger models. Therefore, our approach combines the efficiency of MobileNetV4 with knowledge distillation from a stronger MagFace teacher.

### Knowledge distillation for face embeddings

Knowledge distillation transfers knowledge from a large teacher model to a smaller student model. In the original formulation, the student learns from the softened output distribution of the teacher. For face recognition, however, the final embedding space is more important than the class probability distribution, especially because recognition is usually performed through similarity comparison rather than direct classification.

Therefore, distillation for face recognition can be applied at the embedding level, where the student is encouraged to match the teacher's feature representation. Some works also explore relational distillation, where pairwise distances or angular relations between samples are transferred. In our system, the main distillation signal is embedding-level knowledge distillation from a frozen MagFace iResNet-100 teacher to a MobileNetV4 student. The student is also trained with a MagFace classification head, allowing it to learn both supervised identity separation and teacher-guided embedding structure.

### Occlusion robustness and face quality

Real-world face recognition often suffers from partial occlusion, pose variation, blur, illumination changes, and low-quality frames. Occlusion is especially challenging because important facial regions may be missing, while the model may still produce confident but unreliable embeddings. This issue becomes more serious in video scenarios, where only some frames may contain a clear frontal face.

To address this, many systems use data augmentation or quality-aware filtering. In this work, the training variants explore different occlusion strategies, including lower-face masking, Gaussian blur, and motion blur. The robust variant uses a milder occlusion curriculum combined with stochastic weight averaging to improve stability under masked or partially occluded faces. At inference time, embedding magnitude is used as a quality signal, so low-quality observations can be filtered before being added to the track-level representation.

### Video recognition, retrieval, and liveness

A practical video face recognition system requires more than a face embedding model. It must first detect faces, align them, extract embeddings, associate detections across frames, filter unreliable observations, and finally retrieve the closest identity from a gallery. Landmark-based alignment, such as 5-point affine alignment, is commonly used to normalize face images before feature extraction.

Tracking maintains identity consistency across frames by combining motion and appearance cues. In this system it also collects multiple embeddings from the same person over time, allowing track-level pooling instead of a single-frame decision. Retrieval uses FAISS for efficient nearest-neighbor search, plus a top-1-score and top-1/top-2-margin rule for open-set behavior. A liveness gate filters potential presentation attacks before embeddings are added to the track buffer.

## Method

### Teacher-student distillation

The MagFace iResNet-100 teacher and MobileNetV4 student both emit 512-dimensional embeddings. The teacher is frozen; the student combines supervised identity classification with embedding-level knowledge distillation. A spatial projection head is used only for variants that enable spatial matching.

<div class="math-block">
\[
\mathcal{L} = \lambda_{\mathrm{cls}}\mathcal{L}_{\mathrm{MagFace}}
+ \lambda_{\mathrm{kd}}\mathcal{L}_{\mathrm{KD}}
+ \lambda_{\mathrm{spatial}}\mathcal{L}_{\mathrm{spatial}}.
\]
</div>

Here, <span class="math-inline">&#36;&#92;mathcal{L}_{&#92;mathrm{MagFace}}&#36;</span> is the MagFace classification loss, <span class="math-inline">&#36;&#92;mathcal{L}_{&#92;mathrm{KD}}&#36;</span> is the embedding-level distillation loss, and <span class="math-inline">&#36;&#92;mathcal{L}_{&#92;mathrm{spatial}}&#36;</span> is an optional spatial feature matching loss. The main distillation term is mean squared error between student and teacher embeddings. The teacher parameters are fixed; the teacher receives inputs in the range expected by the MagFace checkpoint, while the student receives normalized face crops.

### Clean-teacher and augmented-student distillation

During training, the teacher receives the clean image, while the student receives an augmented version of the same image. This clean-teacher and augmented-student design encourages the student to produce teacher-like embeddings even when the input is degraded by masking or blur. This asymmetric input setup is shared by all training variants.

Although the repository names the models as Phase 1, Phase 2, and Phase 3, they are not sequential fine-tuning stages. They are independently trained variants of the same teacher-student framework, each trained from scratch with a different augmentation and distillation policy.

### Training variants

**V1: Clean KD baseline.** V1 focuses on clean-face recognition. It uses MagFace classification and embedding-level KD, without spatial KD. It applies only light lower-face masking after a clean warm-up period, making it suitable for clean access-control scenarios.

**V2: Spatial KD with aggressive occlusion curriculum.** V2 adds spatial KD and a stronger occlusion curriculum, including lower-face masking, Gaussian blur, and motion blur. This variant exposes a failure case: the student may receive a masked input while being forced to match the teacher's clean spatial features. This creates contradictory supervision and makes V2 mainly useful as an ablation.

**V3: SWA-stabilized robust variant.** V3 targets masked or partially occluded faces. It uses a milder occlusion curriculum and applies stochastic weight averaging near the end of training. To avoid the spatial-KD conflict, spatial feature matching is disabled when mask augmentation is active.

### Runtime processing, tracking, and filtering

At runtime, faces are detected using a YOLO-based detector. When valid five-point landmarks are available, each face is aligned to a canonical $112 \times 112$ template. If reliable landmarks are not available, the system falls back to a bounding-box crop instead of applying affine alignment with synthetic landmarks. The detector also applies an additional cross-class non-maximum suppression step to merge duplicate detections of the same face and reduce track fragmentation.

After embedding extraction, detections are associated across frames using a tracking backend. The system supports DeepSORT, BoT-SORT, and a Hungarian matching fallback. Each tracked observation is passed through liveness and quality filtering. An embedding is added to the track buffer only if the observation is classified as live and its embedding magnitude lies within the accepted quality range.

### Video inference

![Runtime video-inference pipeline.]({{ page.url | append: 'images/inference-pipeline.png' | relative_url }})

*Figure 2. Runtime pipeline. Detection, alignment, embedding extraction, tracking, filtering, track pooling, and retrieval produce either a known identity or an unknown label.*

The video pipeline follows these stages:

1. A YOLO-based detector locates faces; five-point landmarks enable alignment to a $112 \times 112$ crop when reliable.
2. DeepSORT, BoT-SORT, or Hungarian matching associates observations over time.
3. Liveness and embedding-magnitude quality gates reject unsuitable samples before they enter the track buffer.
4. Accepted embeddings are pooled with their MagFace magnitudes as weights, then <span class="math-inline">&#36;&#92;ell_2&#36;</span>-normalized.
5. FAISS HNSW retrieval uses both a top-score threshold and a top-1/top-2 margin. Unmatched tracks may be grouped as unknown identities.

### Track-level pooling and unknown grouping

Instead of recognizing each frame independently, the system aggregates accepted embeddings over a track. Each embedding is stored with its MagFace magnitude, and the final track representation is computed by magnitude-weighted pooling followed by <span class="math-inline">&#36;&#92;ell_2&#36;</span> normalization. This gives higher weight to clearer and more reliable observations.

If a track cannot be matched to a known identity, the system groups it as an unknown identity based on embedding similarity. A track is assigned to an existing unknown group if the similarity is high enough; otherwise, a new group is created. The pipeline stores unknown-group metadata, including track IDs, frame range, prototype statistics, and sample face crops for later review. It can also optionally auto-register an unknown identity into the live index if the track satisfies minimum length and quality requirements.

## Experimental protocol

All students are trained on MS1M for 40 epochs with AdamW, mixed precision, DALI RecordIO loading, a three-epoch warm-up, and learning-rate decays at epochs 20, 30, and 36. Clean verification is measured on LFW, CFP-FP, and AgeDB-30. Template verification is measured on IJB-B and IJB-C, with particular attention to TAR at $\mathrm{FAR}=10^{-4}$. Synthetic lower-face masking evaluates occlusion robustness.

| Evaluation | Protocols | Main metrics |
| --- | --- | --- |
| Clean verification | LFW, CFP-FP, AgeDB-30 | Accuracy and mean accuracy |
| Template verification | IJB-B, IJB-C | AUC and TAR@FAR $10^{-4}$ |
| Occlusion robustness | Lower-face masking | TAR drop |
| Runtime pipeline | Recorded or live video | FPS, accepted and recognized observations |
| Open-set video ID | Annotated video tracks | TPIR@FPIR, FNIR, MisIDR |

### Training variants

All variants share the same teacher, student backbone, embedding dimension, and main distillation objective, but differ in spatial KD, augmentation policy, and checkpoint stabilization. V1 uses only light lower-face masking after a clean warm-up period. V2 adds a stronger occlusion curriculum with lower-face masking, Gaussian blur, and motion blur. V3 uses a milder curriculum and applies stochastic weight averaging near the end of training to improve robustness and checkpoint stability.

### Implementation details

All face crops are resized to $112 \times 112$. The student receives normalized inputs in the range $[-1,1]$, while the teacher input is remapped to $[0,1]$ to match the MagFace checkpoint. The student is trained with a MagFace classification head and embedding-level MSE distillation from the frozen teacher. The KD weight is ramped from 5.0 to 8.0 during the first 8 epochs. For V1, <span class="math-inline">&#36;&#92;lambda_{&#92;mathrm{spatial}}=0&#36;</span>. For V2 and V3, spatial KD is used only when it does not conflict with active masking.

### Runtime video evaluation

In addition to benchmark verification, the trained encoder is evaluated inside the full runtime pipeline. The pipeline detects faces, aligns them when landmarks are available, extracts student embeddings, and associates detections over time using DeepSORT or BoT-SORT. Only observations that pass liveness and magnitude-based quality filtering are added to the track buffer. Accepted embeddings are aggregated by magnitude-weighted track-level pooling before FAISS-based retrieval.

The runtime evaluation reports processed frames, mean FPS, number of detections, accepted observations, recognized observations, and match rejection reasons. When annotated video tracks are available, it additionally reports open-set identification metrics such as TPIR@FPIR, FNIR, misidentification rate, and unknown false-positive identification rate.

### Compared checkpoints

- **V1/latest:** clean KD checkpoint for clean-face deployment.
- **V1/best:** checkpoint selected by best mean bin-protocol performance.
- **V2/latest:** spatial-KD occlusion variant used as an ablation.
- **V3/latest:** final robust checkpoint before SWA averaging.
- **V3/SWA:** SWA-averaged checkpoint for masked or occluded deployment.

This comparison highlights the trade-off between clean verification accuracy and occlusion robustness. V1 is expected to perform best on clean benchmarks, while V3/SWA is expected to be more stable under lower-face occlusion. V2 is included as an ablation to analyze the effect of combining spatial KD with aggressive occlusion augmentation.

## Results

### Clean verification

The teacher remains strongest overall, as expected from its larger backbone. Among student checkpoints, V1/best obtains the strongest mean clean-protocol accuracy, while V3/best leads student LFW accuracy.

| Model | LFW | CFP-FP | AgeDB-30 | Mean |
| --- | ---: | ---: | ---: | ---: |
| MagFace iResNet-100 | 99.78 | 96.27 | 98.30 | 98.12 |
| V1/latest | 99.25 | 93.43 | 95.68 | 96.12 |
| V1/best | 99.20 | **94.14** | **95.77** | **96.37** |
| V3/best | **99.43** | 92.79 | 95.15 | 95.79 |
| V3/latest | 99.02 | 92.06 | 93.60 | 94.89 |
| V3/SWA | 99.00 | 91.54 | 94.00 | 94.85 |

The teacher model achieves the highest overall accuracy, as expected from the larger MagFace iResNet-100 backbone. Among the student variants, V1 performs best on the clean bin protocols. In particular, V1/best obtains the highest mean accuracy of 96.37%, mainly due to stronger performance on CFP-FP and AgeDB-30. V3/best achieves the highest LFW accuracy among the students, but its lower CFP-FP and AgeDB-30 scores reduce its mean performance.

These results show that the clean KD variant is the most suitable checkpoint for standard clean-face verification. Although V3 is designed for robustness, its clean benchmark accuracy is lower than V1, especially on CFP-FP and AgeDB-30. This suggests a trade-off between clean verification accuracy and robustness-oriented training.

### Low-FAR template verification

For controlled, clean-face use, V1/latest is the preferred student checkpoint. It reaches 87.98% TAR at $10^{-4}$ FAR on IJB-B and 90.65% on IJB-C. V2 demonstrates a useful caution: its higher AUC does not translate to stronger strict low-FAR performance.

| Model | IJB-B AUC | IJB-B TAR@$10^{-4}$ | IJB-C AUC | IJB-C TAR@$10^{-4}$ |
| --- | ---: | ---: | ---: | ---: |
| MagFace iResNet-100 | 0.9922 | 93.14 | 0.9960 | 97.64 |
| V1/latest | 0.9912 | **87.98** | 0.9937 | **90.65** |
| V1/best | 0.9905 | 86.88 | 0.9929 | 89.50 |
| V2/latest | **0.9935** | 84.52 | **0.9949** | 86.85 |
| V3/best | 0.9916 | 84.77 | 0.9929 | 87.64 |
| V3/latest | 0.9917 | 84.78 | 0.9932 | 87.23 |
| V3/SWA | 0.9919 | 85.27 | 0.9930 | 87.77 |

The teacher remains the strongest model on both IJB-B and IJB-C. Among the student models, V1/latest gives the best low-FAR performance, reaching 87.98% TAR at $10^{-4}$ on IJB-B and 90.65% on IJB-C. This confirms that V1 is the preferred student checkpoint for clean or controlled deployment.

V2/latest obtains the highest AUC among the student variants but performs worse at TAR@$10^{-4}$. This indicates that AUC alone does not fully reflect strict low-FAR behavior. Since real access-control systems usually operate at low false-acceptance rates, TAR at strict FAR thresholds is more important for deployment.

### Occlusion robustness

V3/SWA has the smallest degradation under lower-face masking across all reported protocols. It is therefore the more suitable checkpoint where masks or partial occlusion are expected, even though its clean verification is below V1.

| Model | LFW TAR drop | CFP-FP | AgeDB | CPLFW | CALFW |
| --- | ---: | ---: | ---: | ---: |
| MagFace iResNet-100 | -0.041 | -0.520 | -0.541 | -0.724 | -0.236 |
| V1/latest | -0.037 | -0.369 | -0.462 | -0.222 | -0.248 |
| V3/SWA | **-0.019** | **-0.298** | **-0.321** | **-0.148** | **-0.100** |

Compared with V1/latest, V3/SWA reduces the TAR drop on all occlusion benchmarks. The improvement is especially clear on AgeDB, CPLFW, and CALFW. This supports the use of V3/SWA in masked or partially occluded environments, even though it does not achieve the best clean verification accuracy.

The teacher also suffers large degradation under lower-face masking, especially on CFP-FP, AgeDB, and CPLFW. This shows that a larger model is not necessarily more robust to structured occlusion. The robust student variant benefits from occlusion-aware training and SWA, making it more stable under masked-face conditions.

### Checkpoint recommendation

| Checkpoint | Strength | Recommended use |
| --- | --- | --- |
| V1/latest | Best student IJB TAR@$10^{-4}$ | Clean access-control deployment |
| V1/best | Best bin-protocol mean accuracy | Clean image-pair verification |
| V2/latest | Diagnostic spatial-KD ablation | Not recommended for deployment |
| V3/latest | Robust variant before averaging | Reference checkpoint |
| V3/SWA | Best occlusion robustness | Masked or partially occluded deployment |

## Qualitative examples

![All visible subjects correctly recognized by the system.]({{ page.url | append: 'images/qualitative-clean-recognition.png' | relative_url }})

*Figure 5. Qualitative result: all visible subjects are recognized.*

![Recognition remains stable under partial face occlusion.]({{ page.url | append: 'images/qualitative-partial-occlusion.png' | relative_url }})

*Figure 6. Qualitative result: the system maintains recognition with partial occlusion.*

![A heavily occluded subject wearing a VR headset is rejected as unknown.]({{ page.url | append: 'images/qualitative-vr-unknown.png' | relative_url }})

*Figure 7. Qualitative result: a heavily occluded subject is conservatively rejected as unknown.*

## Ablation study

### Factors across variants

| Variant | Embedding KD | Spatial KD | Occlusion strength | SWA |
| --- | --- | --- | --- | --- |
| V1: Clean KD | Yes | No | Light | No |
| V2: Spatial-Occlusion KD | Yes | Yes | Aggressive | No |
| V3/latest | Yes | Yes | Milder | No |
| V3/SWA | Yes | Yes | Milder | Yes |

### Clean low-FAR performance versus occlusion robustness

| Checkpoint | IJB-B TAR@$10^{-4}$ | IJB-C TAR@$10^{-4}$ | Occlusion robustness |
| --- | ---: | ---: | --- |
| V1/latest | **87.98** | **90.65** | Medium |
| V3/SWA | 85.27 | 87.77 | **High** |

### Effect of aggressive spatial-occlusion KD

| Checkpoint | IJB-B AUC | IJB-B TAR@$10^{-4}$ | IJB-C AUC | IJB-C TAR@$10^{-4}$ |
| --- | ---: | ---: | ---: | ---: |
| V1/latest | 0.9912 | **87.98** | 0.9937 | **90.65** |
| V2/latest | **0.9935** | 84.52 | **0.9949** | 86.85 |

### Effect of SWA

| Checkpoint | IJB-B AUC | IJB-B TAR@$10^{-4}$ | IJB-C AUC | IJB-C TAR@$10^{-4}$ |
| --- | ---: | ---: | ---: | ---: |
| V3/latest | 0.9917 | 84.78 | **0.9932** | 87.23 |
| V3/SWA | **0.9919** | **85.27** | 0.9930 | **87.77** |

### Lower-face occlusion ablation

| Checkpoint | LFW TAR drop | CFP-FP | AgeDB | CPLFW | CALFW |
| --- | ---: | ---: | ---: | ---: | ---: |
| Teacher | -0.041 | -0.520 | -0.541 | -0.724 | -0.236 |
| V1/latest | -0.037 | -0.369 | -0.462 | -0.222 | -0.248 |
| V3/SWA | **-0.019** | **-0.298** | **-0.321** | **-0.148** | **-0.100** |

The ablations show that V2's aggressive spatial-occlusion KD does not improve strict low-FAR deployment performance. The student is penalized for failing to reconstruct clean spatial features from heavily masked inputs, creating contradictory supervision. SWA slightly but consistently improves the robustness-oriented variant while preserving the benefit of the milder occlusion curriculum.

## Discussion

### Accuracy versus robustness

The results demonstrate a clear trade-off between clean-face accuracy and occlusion robustness. The baseline variant (V1) achieves the best performance on clean verification, notably on IJB-B and IJB-C at FAR=$10^{-4}$. This makes V1 the optimal choice for controlled environments like access control. Conversely, the SWA-stabilized model (V3/SWA) exhibits superior resilience against lower-face masking, minimizing the True Accept Rate (TAR) drop across all masked protocols. While occlusion-oriented training slightly sacrifices clean benchmark performance, it is crucial for deployments facing frequent occlusions. Despite its high capacity, the teacher model suffers significant degradation under masking, proving that model size alone does not guarantee robustness.

### Teacher-student distillation and track-level recognition

Although the MagFace iResNet-100 teacher outperforms the students on clean benchmarks due to its capacity, the MobileNetV4 student models achieve highly competitive results. This validates the efficacy of knowledge distillation for transferring the teacher's embedding structure to a lightweight model. The asymmetric setup, where the teacher processes clean images while the student learns from augmented ones, forces the student to map corrupted inputs to stable embeddings, effectively learning robustness without requiring the teacher itself to process corrupted inputs.

Real-world video recognition extends beyond static embedding extraction; individual frames are highly susceptible to blur, pose variations, and artifacts. The proposed runtime pipeline aggregates only reliable observations using liveness filtering, alignment, tracking, and magnitude-based quality gating. Weighting clearer observations heavily during track-level pooling ensures stable and conservative identity retrieval.

## Limitations

The full runtime pipeline has not yet been evaluated on a standardized large-scale open-set video benchmark. Its anti-spoofing component is a modular liveness gate rather than a fully validated presentation-attack detector, and synthetic lower-face masks do not represent every real-world occlusion. These limitations should be addressed before security-critical deployment.

The runtime video pipeline records FPS, accepted observations, recognized observations, and match rejection reasons, but a more complete evaluation with annotated video tracks is needed to measure TPIR, FPIR, FNIR, and identity switches. Real presentation-attack protocols are also required before high-security authentication deployment. Finally, spatial KD, occlusion strength, and SWA differ across the three practical configuration-level variants; future work should isolate each factor more carefully to quantify its individual contribution.

## Conclusion

This work presents an edge-oriented video face recognition system based on a lightweight MobileNetV4 student distilled from a frozen MagFace iResNet-100 teacher. The proposed system combines MagFace classification, embedding-level knowledge distillation, and a complete runtime pipeline with detection, tracking, liveness filtering, magnitude-based quality gating, track-level pooling, and FAISS-based retrieval.

The work evaluates three independently trained variants rather than sequential training phases. The results show that V1 is the best choice for clean-face verification, especially under strict low-FAR IJB evaluation, while V3/SWA provides better robustness under lower-face occlusion. V2 serves as an important ablation, showing that aggressive occlusion training combined with spatial KD can hurt performance when the student receives masked inputs but is forced to match clean teacher spatial features.

Overall, the study highlights a practical trade-off between clean accuracy and occlusion robustness. For controlled access-control scenarios, the clean KD variant is preferred. For environments with masks or partial occlusion, the SWA-stabilized robust variant is more suitable. Future work will focus on stronger anti-spoofing evaluation, real open-set video benchmarks, and further optimization for real-time edge deployment. The attached source package contains the canonical full LaTeX manuscript, bibliography, and original figures.
