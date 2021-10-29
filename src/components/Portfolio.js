import { Box, Divider, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  title: {
    margin: "30px 0 0 0 ",
  },
  divider: {
    margin: "20px 0 0 0",
    height: "3px",
    backgroundColor: "black",
  },
  introduction: {
    textAlign: "justify",
    marginRight: "30px",
    fontSize: "14px",
  },
  heading: {
    fontWeight: "bold",
    fontSize: "20px",
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" className={classes.title}>
        Main Projects
      </Typography>
      <Divider className={classes.divider} />
      <Box className={classes.matter}>
        <div>
          <ol>
            <li>
              <Typography variant="h6" className={classes.introduction}>
                <h4 className={classes.heading}>
                  Using Information Retrieval (IR) for extreme Zero-Shot
                  Learning
                </h4>
                <p>
                  TL;DR- I experimented with the paradigm of using information
                  retrieval for zero shot learning in extreme classification
                  with guidance from my mentor. This helped in our published
                  research paper.
                  <br />
                  <br />
                  This paradigm is highly performant and works as
                  follows- First, we tokenize the label text into tokens. Then
                  we map each datapoint to tokens of its relevant labels. An
                  extreme classifier is trained on the tokens. While prediction,
                  a distribution of tokens is predicted. Then for a given label,
                  KL divergence between token distribution of that label and
                  predicted token distribution is the relevance score of that
                  label. A basic version of such an algorithm was already being
                  used in Bing Ads recommendation and it brought huge revenue
                  impact. We were developing this algorithm from research
                  perspective. Tokenization of labels was the most difficult and
                  impactful part of it. Initially, we developed heuristics for
                  tokenization with which this algorithm performs better than
                  baseline algorithms in accuracy metrics like Precision@k. I
                  did the experimentation with these heuristics to learn what
                  works and what does not work. This led us to a fundamental
                  understanding of how the ideal tokenization should be. We
                  found that the naive tokenization of labels into its unigrams
                  results in less informative tokens and incorrect matching of
                  tokens. On the other hand, using tokens as labels are
                  informative but lack data which is the zero shot learning
                  problem. So we then tried to define the quality of tokens. A
                  token is of good quality if it has more training points
                  associated with it and does not incorrectly match with other
                  tokens (meaning it is more specific and informative) to create
                  irrelevant labels. My ingenious contribution was developing
                  this understanding through experimentation and finding these
                  two factors in the quality of a token by looking at the
                  predictions of my experiments. We used this for top k
                  sparsification of label features so that each label will be
                  represented only by its k top quality tokens. I also came up
                  with a simple token matching scheme by taking the geometric
                  mean of token scores of a label to get the score for that
                  label. It worked surprisingly well considering how simple it
                  is. This decent performing token matcher can be used with any
                  tokenization which enabled us to experiment and improve the
                  tokenization part of the algorithm. After this, my mentor
                  developed the final algorithm.
                </p>
              </Typography>
            </li>
            <li>
              <Typography variant="h6" className={classes.introduction}>
                <h4 className={classes.heading}>
                  Algorithm to merge label scores of two disjoint label sets
                </h4>
                <p>
                  In large scale multi label learning, there is a long tail
                  distribution of the number of training points of labels.
                  Different algorithms perform best for head
                  labels(having lot of training points) and tail labels. So, the
                  best performing model on head labels should be used for
                  predicting head labels and similarly for tail labels. But the
                  scores from these two models are not necessarily in the same
                  space. For example, one model gives output in real numbers
                  while the second model in [0,1]. I built an algorithm to
                  transform these scores into the same space. So the two label
                  score lists can be combined into one final transformed ranking
                  list. The algorithm learns the transformation on the
                  validation set using binary classification and uses the learnt
                  decision boundary to compare scores from the two lists. 
                </p>
              </Typography>
            </li>
            <li>
              <Typography variant="h6" className={classes.introduction}>
                <h4 className={classes.heading}>Creating Ads dataset</h4>
                <p>
                  The main application of extreme classification is query to Ad
                  recommendation. I created zero-shot learning dataset of Bing
                  Ads (having around 30 million labels) to enable research in
                  this area. The dataset is created through billions of entries
                  in user click logs. These user logs go through a data cleaning
                  pipeline consisting of a lot of filters. I created this
                  pipeline for our use case by analyzing the effect of various
                  filters available and deciding if they should be included in
                  the pipeline. 
                </p>
              </Typography>
            </li>
            <li>
              <Typography variant="h6" className={classes.introduction}>
                <h4 className={classes.heading}>
                  Creating Wikipedia and Amazon dataset
                </h4>
                <p>
                  The goal was to create Wikipedia article to
                  category and Amazon product to product recommendation dataset.
                  My mentor had written scripts for an old version of Wikipedia dataset.
                  I modified those scripts in Perl to work with the latest
                  version of Wikipedia dump. This dump consists of html scripts
                  of Wikipedia pages. From this html file, article content and
                  annotated categories are extracted by matching a lot of
                  regexes. This gives the dataset in raw text representation. I
                  further created the pipeline to create the zero shot version
                  of Wikipedia and Amazon dataset.  
                </p>
              </Typography>
            </li>
            <li>
              <Typography variant="h6" className={classes.introduction}>
                <h4 className={classes.heading}>Improving NCC classifier</h4>
                <p>
                  This was a small project of my own. Nearest Centroid
                  Classifier is a well performing generative classifier in
                  extreme classification(XC) datasets. Moreover, in many XC
                  algorithms, the mean of positive datapoints of a label is used
                  as the label vector. However this is not robust since mean is
                  not a robust statistic. So I experimented instead using median
                  or truncated mean as label vector. This gave significant
                  improvements in a couple of datasets but not in others.
                  Although this idea is useful for having robustness in the
                  algorithms, I did not pursue it to the stage of publishing. 
                </p>
              </Typography>
            </li>
            <li>
              <Typography variant="h6" className={classes.introduction}>
                <h4 className={classes.heading}>Running baselines</h4>
                <p>
                  For our paper published in SIGKDD’21, I created most of the
                  baselines including some deep learning based and non deep
                  learning based algorithms. Rest of the baselines were created
                  by a co-author. 
                </p>
              </Typography>
            </li>
          </ol>
        </div>
      </Box>
    </div>
  );
}
