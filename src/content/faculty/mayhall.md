---
name: Nick Mayhall
title: Professor
photo: ./mayhall.jpg
blurb: Quantum algorithms for chemistry, and the classical methods they teach us to build.
researchAreas:
  - Quantum information science
  - Quantum algorithms for chemistry
  - Strongly correlated electronic structure
  - Tensor and cluster methods
personalSite: https://mayhallgroup.github.io/group_website/
googleScholar: https://scholar.google.com/citations?user=X4it56UAAAAJ
education:
  - PhD, Chemistry, Indiana University Bloomington, 2011
  - Postdoctoral Fellow, University of California, Berkeley, 2011–2015
  - BS, Chemistry, University of Southern Indiana, 2006
awards:
  - year: '2023'
    name: John C. Schug Research Award, Virginia Tech
  - year: '2021'
    name: Alfred P. Sloan Research Fellow in Chemistry
  - year: '2018'
    name: NSF CAREER Award
  - year: '2014'
    name: ACS Physical Chemistry Division Postdoctoral Research Award
order: 3
---

The Mayhall group works at the intersection of computational chemistry and quantum
information science. The central question runs in both directions: what can quantum
computers do for chemistry, and what does thinking about quantum information teach us
about simulating chemistry on the classical computers we already have?

## Quantum algorithms

The group is best known for
[**ADAPT-VQE**](https://doi.org/10.1038/s41467-019-10988-2), an adaptive variational
algorithm that builds a problem-tailored ansatz operator by operator rather than fixing
its form in advance. The approach has since grown into a family: qubit-ADAPT-VQE for hardware-efficient
ansätze, ADAPT-QAOA for combinatorial optimization, and TETRIS-ADAPT-VQE for shallower
circuits. Related work has shown that problem-tailored ansätze
[mitigate barren plateaus and rough parameter landscapes](https://doi.org/10.1038/s41534-023-00681-0),
and has examined how
[symmetry breaking slows convergence](https://doi.org/10.1021/acs.jctc.2c00709).

A second thread targets the hardware directly, replacing gate sequences with
[optimized control pulses](https://doi.org/10.1038/s41534-021-00493-0) to prepare states
faster than decoherence can destroy them.

## Classical electronic structure

Strong correlation remains the harder half of the problem, and much of the group's effort
goes into classical methods that exploit locality and sparsity. Recent work centers on
[**Tensor Product Selected CI (TPSCI)**](https://doi.org/10.1021/acs.jctc.0c00141),
which builds a selected CI in a basis of tensor products of local cluster states,
alongside [cluster mean-field approaches](https://doi.org/10.1021/acs.jpca.4c03914), the
[*n*-body Tucker approximation](https://doi.org/10.1021/acs.jctc.7b00696), and
[quantum embedding](https://doi.org/10.1021/acs.jctc.8b01112) schemes for
[truncating virtual spaces](https://doi.org/10.1021/acs.jctc.9b00682).

Earlier work developed
[spin-flip and Fock-space CI methods](https://doi.org/10.1021/acs.jctc.8b01268) for
diradicals and molecular magnets, and — during his PhD at IU with Krishnan Raghavachari —
the Molecules-in-Molecules and Many-Overlapping-Body fragmentation approaches for large
systems.

## Background

Mayhall earned his PhD at Indiana University in 2011 with Krishnan Raghavachari and was
a postdoctoral fellow with Martin Head-Gordon at UC Berkeley. He was on the Virginia
Tech faculty from 2015 to 2025 before returning to Bloomington in Fall 2025.
