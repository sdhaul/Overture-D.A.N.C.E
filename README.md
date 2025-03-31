## 📜 **Overview**

Overture-D.A.N.C.E.R. is an AI-driven web application that classifies dance styles (e.g., Hip Hop, Bharatanatyam, Michael Jackson) from video inputs using advanced computer vision and machine learning. It provides biomechanical analysis and cultural context for predictions, combining techniques from motion analysis research, temporal deep learning, and explainable AI.

## 🎯 **Key Features**

1. **Multi-Style Dance Classification**
    - Detects **8+ dance styles** using hybrid Temporal CNN-Transformer models.
    - Supported styles: Hip Hop, Ballet, Michael Jackson (signature moves), Bharatanatyam, Flamenco, Tap, Pop, and Spanish.
1. **Biomechanical Motion Analysis**
    - Quantifies **sharpness, fluidity, footwork complexity, and rhythmic accuracy** via joint kinematics.
    - Implements dance pedagogy metrics (e.g., Laban Effort Analysis, *anga suddham* for classical forms).
1. **Cultural Context Visualization**
    - Interactive radar charts and 2D/3D style embeddings using D3.js and Three.js.
    - Temporal motion trails comparing user movements to reference dancers.
1. **Explainable AI Feedback**
    - Highlights style-defining features (e.g., "92% match in MJ's heel-leading footwork").
    - Cross-references movement patterns with cultural dance anthropology.

## 🛠️ **Tech Stack**

| **Component**    | **Tools**                                                               |
| ---------------- | ----------------------------------------------------------------------- |
| **Frontend**     | Vue, D3.js, Three.js, MediaPipe BlazePose (TF.js)                       |
| **Backend**      | FastAPI, ONNX Runtime, **Google Cloud Spanner** (distributed newSQL database)  |
| **AI/ML Models** | PyTorch (TCN + Transformer), HuggingFace Transformers, RAFT-Stereo Flow |
| **Datasets**     | Let's Dance Dataset, Kaggle Indian Classical Dance, Synthetic MJ Moves  |

## 📚 **Research Implementation**

1. **Temporal Convolutional Networks (TCNs)**
    - Adapted from [noa-codes.github.io/dance.pdf](https://noa-codes.github.io/dance.pdf) for modeling pose sequences.
    - Enhanced with attention gates for style-specific feature weighting.
1. **Contrastive Dance Embeddings**
    - Implemented supervised contrastive loss (from [Georgia Tech Paper](https://sites.cc.gatech.edu/cpl/projects/dance/paper.pdf)) to separate dance styles in latent space.
1. **Cultural Motion Metrics**
    - Custom joint alignment scoring for Indian classical dance (*anga suddham*).
    - Flamenco footwork rhythm analysis via audio-visual correlation.
1. **Modern Upgrades**
    - Replaced Farneback optical flow with **RAFT-Stereo (2023)** for robust motion context.
    - Integrated **Transformer encoders** for long-range temporal dependencies.

Let me know if you need adjustments to align with your hackathon scope!

---
